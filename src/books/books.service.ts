import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookSchema } from './model/bookModel';
import { Model } from 'mongoose';
import { Books } from './entity/book.interface';

@Injectable()
export class BooksService {
  constructor(
    @InjectModel(BookSchema.name)
    private readonly bookModel: Model<BookSchema>,
  ) {}

  async findAll(): Promise<Books[]> {
    return await this.bookModel.find().exec();
  }

  async create(book: Books) {
    const newBook = new this.bookModel(book);
    return await newBook.save();
  }

  async findById(id: string) {
    const book = await this.bookModel.findById(id).exec();
    return book;
  }

  async updateById(input: { id: string; [key: string]: any }) {
    const book = await this.bookModel
      .findByIdAndUpdate(input._id, input, { new: true })
      .exec();
    return book;
  }

  async delete(input: { id: string; [key: string]: any }) {
    const deletedBook = await this.bookModel.findByIdAndDelete(input.id).exec();
    return deletedBook;
  }
}
