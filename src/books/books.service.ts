import { Injectable } from '@nestjs/common';
import { Books } from './entity/book.interface';
import { BookFilterInput } from './types/bookFilter.type';
import { BooksRepository } from './books.repository';

@Injectable()
export class BooksService {
  constructor(private readonly bookRepository: BooksRepository) {}

  async getAllBooks(): Promise<Books[]> {
    return await this.bookRepository.findAll();
  }

  async createBook(book: Books) {
    return this.bookRepository.create(book);
  }

  async getBookById(id: string) {
    return this.bookRepository.findById(id);
  }

  async updateBook(input: Partial<Books>) {
    return this.bookRepository.updateById(input);
  }

  async removeBook(id: string) {
    return this.bookRepository.delete(id);
  }

  async getBookByFilter(filter?: BookFilterInput): Promise<Books[]> {
    return this.bookRepository.findByFilter(filter);
  }
}
