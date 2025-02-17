import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { genreTypes } from '../model/bookModel';

registerEnumType(genreTypes, {
  name: 'GenreTypes',
  description: 'Жанры книг',
});

@ObjectType()
export class Book {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  author: string;

  @Field(() => genreTypes, { nullable: true })
  genre: genreTypes;

  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  inStock: boolean;
}
