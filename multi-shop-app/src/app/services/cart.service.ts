import { Injectable } from '@angular/core';
import { CartLine } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartLines: Array<CartLine> = [];
  constructor() {}

  getProductCount(): number {
    //return this.cartLines.map((x) => x.count).reduce((a, v) => (a += v));
    return this.cartLines.length;
  }

  addProduct(product: Product) {
    let itemFound = false;
    for (let i = 0; i < this.cartLines.length; i++) {
      if (this.cartLines[i].product.id === product.id) {
        this.cartLines[i].count += 1;
        itemFound = true;
      }
    }
    if (!itemFound) {
      this.cartLines.push(new CartLine(product));
    }
  }

  //Implement function removeProduct
  removeProduct(productId: number) {}
  //Implement function removeLine
  removeLine(index: number) {}
}
