/**
 * Created by hubertus on 3/30/17.
 */
import { Producer } from '../producer/producer.model';
import { Category } from '../category/category.model';

export class Product {
  id: number;
  name: String;
  category: Category;
  producer: Producer;
}
