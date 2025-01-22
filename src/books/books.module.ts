import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookSchema, BookSchemaModel } from './model/bookModel';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksResolver } from './resolver/book.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BookSchema.name, schema: BookSchemaModel },
    ]),
  ],
  controllers: [BooksController],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
