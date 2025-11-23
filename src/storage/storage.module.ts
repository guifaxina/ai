import { Module } from '@nestjs/common';
import { StorageService } from './storage.service';
import { StorageController } from './storage.controller';
import { PrismaModule } from 'src/db/postgres/prisma.module';
import { AiModule } from 'src/ai/ai.module';
import { PineconeModule } from 'src/db/pinecone/pinecone.module';

@Module({
  imports: [PrismaModule, AiModule, PineconeModule],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}
