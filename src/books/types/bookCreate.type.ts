import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { genreTypes } from '../model/bookModel';

registerEnumType(genreTypes, {
  name: 'GenreTypes',
  description: 'Жанры книг',
});

@InputType()
export class CreateBook {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field()
  name: string;

  @Field()
  author: string;

  @Field(() => genreTypes)
  genre: genreTypes;

  @Field()
  price: number;

  @Field()
  inStock: boolean;
}
