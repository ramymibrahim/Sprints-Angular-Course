import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import {
  PriceFilter,
  ProductsService,
} from 'src/app/services/products.service';

@Component({
  selector: 'app-shop-products',
  templateUrl: './shop-products.component.html',
  styleUrls: ['./shop-products.component.css'],
})
export class ShopProductsComponent implements OnInit {
  @Input() priceList: Array<PriceFilter> = [{ minValue: 0, maxValue: 0 }];
  currentPage: number = 0;
  colorList: Array<string> = [];
  sizeList: Array<string> = [];
  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {}

  getProducts(): Array<Product> {
    return this.productsService.getProductWithFilter(
      this.priceList,
      this.colorList,
      this.sizeList,
      this.currentPage,
      6
    );
  }

  getPageSize(): number {
    return this.productsService.getProductCountWithFilter(
      this.priceList,
      this.colorList,
      this.sizeList
    );
  }

  incCurrentPage() {
    this.currentPage++;
  }

  decCurrentPage() {
    this.currentPage--;
  }
  setCurrentPage(i: number) {
    this.currentPage = i;
  }
}
