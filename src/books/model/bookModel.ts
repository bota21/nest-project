import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'books' })
export class BookSchema {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  price: number;

  @Prop({ required: true })
  inStock: boolean;
}

export const BookSchemaModel = SchemaFactory.createForClass(BookSchema);
