import { Body, Controller, Get, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookSchema } from './model/createBook';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll() {
    try {
      await this.booksService.findAll();
    } catch (error) {
      throw new console.log(error);
    }
    return this.booksService.findAll();
  }

  @Post()
  async create(@Body() CreateBook: BookSchema) {
    try {
      await this.booksService.create(CreateBook);
      return CreateBook;
    } catch (error) {
      throw new console.log(error);
    }
  }
}
