import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum genreTypes {
  fiction = 'Fiction',
  Mystery = 'Mystery',
  Thriller = 'Thriller',
  Science = 'Science',
  Fantasy = 'Fantasy',
  Romance = 'Romance',
  Historical = 'Historical',
}

@Schema({ collection: 'books' })
export class BookSchema {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop({ index: true, enum: genreTypes, type: String })
  genre: genreTypes;

  @Prop()
  price: number;

  @Prop({ required: true })
  inStock: boolean;
}

export const BookSchemaModel = SchemaFactory.createForClass(BookSchema);
