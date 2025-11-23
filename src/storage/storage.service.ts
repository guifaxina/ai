import { Inject, Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/db/postgres/prisma.service';
import { AiService } from 'src/ai/ai.service';
import { PINECONE } from 'src/db/pinecone/pinecone.provider';
import { Pinecone } from '@pinecone-database/pinecone';
import { Prisma } from 'src/generated/client';
// import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StorageService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
    private readonly aiService: AiService,
    @Inject(PINECONE)
    private readonly pinecone: Pinecone,
  ) {}

  private readonly s3 = new S3Client({
    region: 'auto',
    endpoint: this.configService.get('R2_ENDPOINT'),
    credentials: {
      accessKeyId: this.configService.get('R2_ACCESS_KEY'),
      secretAccessKey: this.configService.get('R2_SECRET_ACCESS_KEY'),
    },
  });

  async ingest(file: Express.Multer.File) {
    const uuid = randomUUID();

    await this.s3.send(
      new PutObjectCommand({
        Bucket: this.configService.get('R2_BUCKET'),
        Key: uuid,
        Body: file.buffer,
        ContentType: file.mimetype,
      }),
    );

    const { createEmbeddingResponse, chunks } =
      await this.aiService.getDocumentEmbeddingsByUrl({
        url: this.configService.get('R2_PUBLIC_URL') + uuid,
      });

    const document = await this.prismaService.document.create({
      data: {
        title: file.originalname,
        url: this.configService.get('R2_PUBLIC_URL') + uuid,
        type: file.mimetype,
      },
    });

    const createManyChunksData: Prisma.ChunkCreateManyInput[] = chunks.map(
      (chunk, i) => {
        return {
          documentId: document.id,
          order: i,
          text: chunk,
        };
      },
    );

    await this.prismaService.chunk.createMany({
      data: createManyChunksData,
    });

    const indexName = this.configService.get('PINECONE_INDEX_NAME');
    const hostName = this.configService.get('PINECONE_HOST');
    const index = this.pinecone.index(indexName, hostName);

    const records: {
      id: string;
      values: number[];
    }[] = createEmbeddingResponse.data.map((embed, i) => {
      return {
        id: `${document.id}-${i}`,
        values: embed.embedding,
        metadata: {
          order: i,
          documentId: document.id,
        },
      };
    });

    await index.upsert(records);
  }

  async query(query: string) {
    const indexName = this.configService.get('PINECONE_INDEX_NAME');
    const hostName = this.configService.get('PINECONE_HOST');
    const index = this.pinecone.index(indexName, hostName);
    const vector = await this.aiService.getTextEmbeddings(query);

    const queryResponse = await index.namespace('__default__').query({
      vector,
      topK: 3,
      includeValues: false,
      includeMetadata: true,
    });

    const orderOfChunks = queryResponse.matches.map(
      (res) => res.metadata.order,
    );

    const chunks = await this.prismaService.chunk.findMany({
      where: {
        documentId: queryResponse.matches.at(0).metadata.documentId as string,
        order: {
          in: orderOfChunks as number[],
        },
      },
    });
    const context = chunks.map((chunk) => chunk.text);

    return await this.aiService.getRAGResponse(context, query);
  }
}
