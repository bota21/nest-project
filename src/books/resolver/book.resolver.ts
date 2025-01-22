import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { Book } from '../types/book.type';
import { BooksService } from '../books.service';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book], { name: 'books' })
  async findAll(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @Mutation(() => [Book])
  async create(book: Book) {
    const newBook = await this.booksService.create(book);
    return await newBook.save();
  }
}
