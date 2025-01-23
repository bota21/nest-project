import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Book } from '../types/book.type';
import { BooksService } from '../books.service';
import { BookFilterInput } from '../types/bookFilter.type';
import { CreateBook } from '../types/bookCreate.type';
import { UpdateBook } from '../types/bookUpdate.type';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book], { name: 'getBooks' })
  async findAll(): Promise<Book[]> {
    return await this.booksService.getAllBooks();
  }

  @Query(() => [Book], { name: 'getBooks' })
  async findBooks(
    @Args('filter', { nullable: true }) filter?: BookFilterInput,
  ): Promise<Book[]> {
    return this.booksService.getBookByFilter(filter);
  }

  @Mutation(() => Book, { name: 'createBook' })
  async create(@Args('input') book: CreateBook): Promise<Book> {
    const newBook = await this.booksService.createBook(book);
    return newBook.save();
  }

  @Mutation(() => Book, { name: 'updateBook' })
  async update(@Args('input') book: UpdateBook): Promise<Book> {
    const editedBook = await this.booksService.updateBook(book);
    return await editedBook.save();
  }

  @Mutation(() => Book, { name: 'deleteBook' })
  async delete(@Args('id') id: string) {
    return this.booksService.removeBook(id);
  }
}
