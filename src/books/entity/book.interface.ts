import { genreTypes } from '../model/bookModel';

export interface Books {
  id: string;
  name: string;
  author: string;
  genre: genreTypes;
  price: number;
  inStock: boolean;
}
