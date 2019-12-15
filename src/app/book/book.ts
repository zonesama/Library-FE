import {Category} from '../category/category';

export class Book {
  id: number;
  name: string;
  author: string;
  price: number;
  description: string;
  image: string;
  category: Category;
}
