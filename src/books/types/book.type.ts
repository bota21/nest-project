import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  author: string;

  @Field()
  price: number;

  @Field()
  inStock: boolean;
}
