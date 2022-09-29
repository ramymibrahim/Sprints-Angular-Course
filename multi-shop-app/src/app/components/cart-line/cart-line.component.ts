import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartLine } from 'src/app/interfaces/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: '.app-cart-line',
  templateUrl: './cart-line.component.html',
  styleUrls: ['./cart-line.component.css'],
})
export class CartLineComponent implements OnInit {
  @Input() cartLine: CartLine = {} as CartLine;
  @Input() index: number = -1;

  @Output() addItemEmitter = new EventEmitter<number>();
  @Output() removeItemEmitter = new EventEmitter<number>();
  @Output() deleteEmitter = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.addItemEmitter.emit(this.index);
  }

  removeItem() {
    this.removeItemEmitter.emit(this.index);
  }

  delete() {
    this.deleteEmitter.emit(this.index);
  }
}
