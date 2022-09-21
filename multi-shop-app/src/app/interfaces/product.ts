import { ProductComponent } from '../components/product/product.component';
import { Review } from './review';

export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  rating: number;
  ratingCount: number;
  imageUrl: string;
  size: string;
  color: string;
  reviews?: Array<Review>;
}
