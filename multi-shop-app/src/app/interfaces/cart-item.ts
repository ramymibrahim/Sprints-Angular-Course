import { Product } from './product';

export class CartLine {
  product: Product;
  count: number;
  constructor(product: Product) {
    this.product = product;
    this.count = 1;
  }

  addItem() {
    this.count++;
  }

  removeItem() {
    if (this.count > 0) this.count--;
  }
}
