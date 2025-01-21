import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

@Schema({ collection: 'books' })
// export class BookSchema extends Document{
export class BookSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  inStock: boolean;
}

export const BookSchemaModel = SchemaFactory.createForClass(BookSchema);

// import { IsBoolean, IsInt, IsString } from 'class-validator';
// export class BookSchema {
//   @IsString()
//   name: string;

//   @IsInt()
//   price: number;

//   @IsBoolean()
//   inStock: boolean;
// }
