import { Component, OnInit } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartLines: Array<CartLine> = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartLines = this.cartService.getProducts();
  }

  addItem(index: number) {
    this.cartService.addItem(index);
  }

  removeItem(index: number) {
    this.cartService.removeItem(index);
  }

  delete(index: number) {
    this.cartService.removeLine(index);
  }

  getSubTotal() {
    return this.cartService.getSubTotal();
  }

  getShippingCost() {
    return this.cartService.getShipping();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
