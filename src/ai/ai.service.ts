import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { encode, decode } from 'gpt-tokenizer';
import { PDFParse } from 'pdf-parse';
import { Pinecone } from '@pinecone-database/pinecone';
import { PrismaService } from 'src/db/postgres/prisma.service';

@Injectable()
export class AiService {
  constructor(
    private readonly configService: ConfigService,
    private readonly prismaService: PrismaService,
  ) {}

  private readonly client = new OpenAI({
    apiKey: this.configService.get('OPENAI_API_KEY'),
  });

  async getDocumentEmbeddingsByUrl({ url }: { url: string }) {
    const chunks = await this.getChunksFromPdf(url);

    const createEmbeddingResponse = await this.client.embeddings.create({
      model: 'text-embedding-3-small',
      input: chunks,
    });

    return { createEmbeddingResponse, chunks };
  }

  async getTextEmbeddings(text: string): Promise<number[]> {
    const createEmbeddingResponse = await this.client.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    });

    return createEmbeddingResponse.data[0].embedding;
  }

  async getRAGResponse(context: string[], query: string) {
    const input = `
      You are a helpful assistant that answer users inputs, wheter they are a question or a statement, you should give the response concisely.
      Extremely important: You should ONLY and ONLY answer based on the given context to you.
      Start of the CONTEXT: ${context}. End of CONTEXT.
      Everything that is asked and does not have relation with the context should be answered with the following: "I'm sorry, but I can't help you with that."

      User Input: ${query}
    `;

    const response = await this.client.responses.create({
      model: 'gpt-5-mini',
      input,
    });

    return response.output_text;
  }

  private async getChunksFromPdf(url: string): Promise<string[]> {
    const parser = new PDFParse({
      url,
    });
    const { text } = await parser.getText();

    const chunks = this.chunkText(text);

    return chunks;
  }

  private splitInSentences(text: string): string[] {
    return text.replace(/\n+/g, ' ').split(/(?<=[.?!])\s+/);
  }

  private chunkText(text: string): string[] {
    const MAX_TOKENS = 150;
    const OVERLAP_TOKENS = 25;

    const sentences = this.splitInSentences(text);

    let currentText = '';
    let currentTokens = 0;
    const chunks: string[] = [];

    for (const sentence of sentences) {
      const sentenceTokens = encode(sentence).length;

      if (sentenceTokens + currentTokens > MAX_TOKENS) {
        chunks.push(currentText.trim());

        const overlap = this.lastNTokens(sentence, OVERLAP_TOKENS);
        currentText = overlap + ' ' + sentence;
        currentTokens = encode(currentText).length;
      } else {
        currentText = currentText + sentence;
        currentTokens += sentenceTokens;
      }
    }
    if (currentText.trim()) chunks.push(currentText.trim());

    return chunks;
  }

  private lastNTokens(text: string, numOfTokens: number) {
    const textTokens = encode(text);

    if (textTokens.length < numOfTokens) {
      return text;
    }

    return decode(textTokens.slice(textTokens.length - numOfTokens));
  }
}
