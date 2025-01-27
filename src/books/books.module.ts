import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookSchema, BookSchemaModel } from './model/bookModel';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksResolver } from './resolver/book.resolver';
import { BooksRepository } from './books.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookSchema.name, schema: BookSchemaModel },
    ]),
  ],
  providers: [BooksService, BooksResolver, BooksRepository],
})
export class BooksModule {}
