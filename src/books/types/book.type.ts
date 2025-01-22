import { ObjectType, Field, ID } from '@nestjs/graphql';
import { genreTypes } from '../model/bookModel';

@ObjectType()
export class Book {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  author: string;

  @Field({ nullable: true })
  genre: genreTypes;

  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  inStock: boolean;
}
