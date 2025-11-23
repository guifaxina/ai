import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { StorageService } from './storage.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('storage')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('ingest')
  async ingest(@UploadedFile() file: Express.Multer.File) {
    return this.storageService.ingest(file);
  }

  @Post('query')
  async query(@Body() { query }: { query: string }) {
    return await this.storageService.query(query);
  }
}
