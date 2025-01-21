import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookSchema } from './model/createBook';
import { Model } from 'mongoose';
import { Books } from './entity/book.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(BookSchema.name)
    private readonly bookModel: Model<BookSchema>,
  ) {}

  async create(book: Books) {
    const newBook = new this.bookModel(book);
    return newBook.save();
  }

  async findAll(): Promise<Books[]> {
    return this.bookModel.find().exec();
  }
}

// @Injectable()
// export class BooksService {
//   private readonly books: Books[] = [];

//   create(book: Books) {
//     return this.books.push(book);
//   }

//   findAll(): Books[] {
//     return this.books;
//   }
// }
