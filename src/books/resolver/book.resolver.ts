import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Book } from '../types/book.type';
import { BooksService } from '../books.service';
import { BookFilterInput } from '../types/bookFilter.type';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book], { name: 'books' })
  async findAll(): Promise<Book[]> {
    return await this.booksService.findAll();
  }

  @Query(() => [Book], { name: 'books' })
  async findBooks(
    @Args('filter', { nullable: true }) filter?: BookFilterInput,
  ): Promise<Book[]> {
    return this.booksService.findByFilter(filter);
  }

  @Mutation(() => Book)
  async create(book: Book): Promise<Book> {
    const newBook = await this.booksService.create(book);
    return newBook.save();
  }

  @Mutation(() => [Book])
  async update(book: Book): Promise<Book> {
    const editedBook = await this.booksService.updateById(book);
    return await editedBook.save();
  }
}
