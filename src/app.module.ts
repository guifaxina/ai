import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/db/postgres/prisma.module';
import { StorageModule } from './storage/storage.module';
import { AiModule } from './ai/ai.module';
import { PineconeModule } from 'src/db/pinecone/pinecone.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    StorageModule,
    AiModule,
    PineconeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
