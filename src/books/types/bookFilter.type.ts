import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { genreTypes } from '../model/bookModel';

registerEnumType(genreTypes, {
  name: 'GenreTypes',
  description: 'Жанры книг',
});

@InputType()
export class BookFilterInput {
  @Field(() => ID, { nullable: true })
  _id: string;

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
