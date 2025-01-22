import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { BookSchema } from './model/bookModel';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  async findAll() {
    try {
      await this.booksService.findAll();
    } catch (error) {
      throw new console.error(error);
    }
    return this.booksService.findAll();
  }

  @Post('create')
  async create(@Body() CreateBook: BookSchema) {
    try {
      await this.booksService.create(CreateBook);
      return CreateBook;
    } catch (error) {
      throw new console.error(error);
    }
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    try {
      return this.booksService.findById(id);
    } catch (error) {
      throw new console.error(error);
    }
  }

  @Patch()
  async update(@Body() UpdateBook: BookSchema) {
    try {
      const book = await this.booksService.updateById(UpdateBook);
      return book;
    } catch (error) {
      throw new console.error(error);
    }
  }

  @Delete()
  async delete(@Body() DeleteBook: BookSchema) {
    try {
      await this.booksService.delete(DeleteBook);
      return `Book ${DeleteBook.id} is deleted`;
    } catch (error) {
      throw new console.error(error);
    }
  }
}
