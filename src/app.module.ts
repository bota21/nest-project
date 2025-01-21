import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './books/model/createBook';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://naoko:Zx2110zx@cluster0.xlrau.mongodb.net/books?retryWrites=true&w=majority',
    ),
    BooksModule,
    BookSchema,
  ],
})
export class AppModule {}
