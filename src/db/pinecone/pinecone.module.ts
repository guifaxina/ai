import { Module } from '@nestjs/common';
import { PineconeProvider } from './pinecone.provider';

@Module({
  providers: [PineconeProvider],
  exports: [PineconeProvider],
})
export class PineconeModule {}
