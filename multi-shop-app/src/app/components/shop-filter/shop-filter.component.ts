import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceFilter } from 'src/app/services/products.service';

@Component({
  selector: 'app-shop-filter',
  templateUrl: './shop-filter.component.html',
  styleUrls: ['./shop-filter.component.css'],
})
export class ShopFilterComponent implements OnInit {
  priceList: Array<PriceFilter> = [];
  @Output() priceEmitter = new EventEmitter<Array<PriceFilter>>();
  constructor() {}

  ngOnInit(): void {}

  changePrice(event: any, min: number, max: number) {
    if (event.target.checked) {
      this.priceList.push({ minValue: min, maxValue: max });
    } else {
      let index = this.priceList.findIndex(
        (x) => x.minValue == min && x.maxValue == max
      );
      this.priceList.splice(index, 1);
    }
    this.priceEmitter.emit(this.priceList);
  }
}
