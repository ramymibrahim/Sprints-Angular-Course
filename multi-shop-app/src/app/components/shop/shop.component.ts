import { Component, OnInit } from '@angular/core';
import { PriceFilter } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  priceList: Array<PriceFilter> = [{ minValue: 0, maxValue: 0 }];
  constructor() {}

  ngOnInit(): void {}

  changePrice(priceList: Array<PriceFilter>) {
    this.priceList = priceList;
  }
}
