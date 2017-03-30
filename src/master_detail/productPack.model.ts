/**
 * Created by hubertus on 3/30/17.
 */
import { Product } from './product.model';

export class ProductPack {
  id: number;
  image: String;
  public size: String;
  type: String;
  product: Product;
  price: String;
}
