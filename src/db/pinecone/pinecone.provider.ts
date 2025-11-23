import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pinecone } from '@pinecone-database/pinecone';

export const PINECONE = 'PINECONE_CLIENT';

export const PineconeProvider: Provider = {
  provide: PINECONE,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const pc = new Pinecone({
      apiKey: configService.get('PINECONE_API_KEY'),
    });

    const indexName = configService.get('PINECONE_INDEX_NAME');
    const existing = await pc.listIndexes();

    if (!existing.indexes.some((i) => i.name === indexName)) {
      await pc.createIndex({
        name: indexName,
        vectorType: 'dense',
        dimension: 1536,
        metric: 'cosine',
        spec: {
          serverless: {
            cloud: 'aws',
            region: 'us-east-1',
          },
        },
        deletionProtection: 'disabled',
        tags: { environment: 'development' },
      });
    }

    return pc;
  },
};
