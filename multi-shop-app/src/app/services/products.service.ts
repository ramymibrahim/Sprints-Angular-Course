import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Product 1',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 150,
      rating: 4.5,
      ratingCount: 100,
      type: 'featured',
      size: 's',
      color: 'black',
    },
    {
      id: 2,
      name: 'Product 1',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 80,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'm',
      color: 'black',
    },
    {
      id: 3,
      name: 'Product 1',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
  ];

  constructor() {}
  getProducts(type: string): Array<Product> {
    return this.products.filter((x) => x.type == type);
  }

  getProductById(id: number): Product {
    return this.products.find((x) => x.id == id) ?? ({} as Product);
  }

  getProductWithFilter(
    priceList: Array<PriceFilter>,
    colorList: Array<string>,
    sizeList: Array<string>
  ): Array<Product> {
    return this.products.filter((p) => {
      return (
        this.isPriceInRange(p.price, priceList) &&
        this.isColorInRange(p.color, colorList) &&
        this.isSizeInRange(p.size, sizeList)
      );
    });
  }

  isColorInRange(color: string, colorList: Array<string>) {
    if (colorList.length == 0) return true;
    return colorList.includes(color);
  }
  isSizeInRange(size: string, sizeList: Array<string>) {
    if (sizeList.length == 0) return true;
    return sizeList.includes(size);
  }
  isPriceInRange(price: number, priceList: Array<PriceFilter>): boolean {
    for (let i = 0; i < priceList.length; i++) {
      if (priceList[i].minValue <= price && priceList[i].maxValue >= price)
        return true;
      if (priceList[i].minValue == 0 && priceList[i].maxValue == 0)
        return true;
    }
    return false;
  }
}

export interface PriceFilter {
  minValue: number;
  maxValue: number;
}
