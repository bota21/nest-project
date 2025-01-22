import { Field, ID, InputType } from '@nestjs/graphql';
import { genreTypes } from '../model/bookModel';

@InputType()
export class BookFilterInput {
  @Field(() => ID, { nullable: true })
  _id: string;

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
