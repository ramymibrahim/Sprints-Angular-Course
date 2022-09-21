import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  itemName: string = 'Item 1';
  isDisabled: boolean = true;
  constructor(private cartService: CartService) {}

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  enableInputJS() {
    document.getElementById('text1')?.setAttribute('disabled', '');
  }
  disableInputJS() {
    document.getElementById('text1')?.setAttribute('disabled', 'disabled');
  }

  getCartCount(): number {
    return this.cartService.getProductCount();
  }
}
