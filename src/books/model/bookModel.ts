import { registerEnumType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum genreTypes {
  Fiction = 'Fiction',
  Mystery = 'Mystery',
  Thriller = 'Thriller',
  Science = 'Science',
  Fantasy = 'Fantasy',
  Romance = 'Romance',
  Historical = 'Historical',
}

registerEnumType(genreTypes, {
  name: 'GenreTypes',
  description: 'Жанры книг',
});

@Schema({ collection: 'books' })
export class BookSchema {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop(() => genreTypes)
  genre: genreTypes;

  @Prop()
  price: number;

  @Prop({ required: true })
  inStock: boolean;
}

export const BookSchemaModel = SchemaFactory.createForClass(BookSchema);
