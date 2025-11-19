import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'node:crypto';
// import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StorageService {
  constructor(
    private readonly configService: ConfigService,
    // private readonly prismaService: PrismaService,
  ) {}

  s3 = new S3Client({
    region: 'auto',
    endpoint: this.configService.get('R2_ENDPOINT'),
    credentials: {
      accessKeyId: this.configService.get('R2_ACCESS_KEY'),
      secretAccessKey: this.configService.get('R2_SECRET_ACCESS_KEY'),
    },
  });

  async upload(file: Express.Multer.File) {
    try {
      const uuid = randomUUID();

      await this.s3.send(
        new PutObjectCommand({
          Bucket: this.configService.get('R2_BUCKET'),
          Key: uuid,
          Body: file.buffer,
          ContentType: file.mimetype,
        }),
      );
    } catch (err) {
      console.log(err);
    }

    // await this.prismaService.document.create({
    //   data: {
    //     title: file.filename,
    //     url: this.configService.get('R2_PUBLIC_URL') + uuid,
    //     type: file.mimetype,
    //   },
    // });
  }

  findAll() {
    return `This action returns all storage`;
  }
}
