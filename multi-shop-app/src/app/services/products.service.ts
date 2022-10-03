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
      name: 'Product 2',
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
      name: 'Product 3',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
    {
      id: 1,
      name: 'Product 4',
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
      name: 'Product 5',
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
      name: 'Product 6',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
    {
      id: 1,
      name: 'Product 7',
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
      name: 'Product 8',
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
      name: 'Product 9',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
    {
      id: 1,
      name: 'Product 10',
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
      name: 'Product 11',
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
      name: 'Product 12',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
    {
      id: 1,
      name: 'Product 13',
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
      name: 'Product 14',
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
      name: 'Product 3',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
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
      name: 'Product 2',
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
      name: 'Product 3',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
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
      name: 'Product 2',
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
      name: 'Product 3',
      discount: 0.2,
      imageUrl: 'assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size: 'l',
      color: 'black',
    },
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
      name: 'Product 2',
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
      name: 'Product 3',
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

  getProductCountWithFilter(
    priceList: Array<PriceFilter>,
    colorList: Array<string>,
    sizeList: Array<string>
  ): number {
    return (
      this.products.filter((p) => {
        return (
          this.isPriceInRange(p.price, priceList) &&
          this.isColorInRange(p.color, colorList) &&
          this.isSizeInRange(p.size, sizeList)
        );
      }).length / 6
    );
  }

  getProductWithFilter(
    priceList: Array<PriceFilter>,
    colorList: Array<string>,
    sizeList: Array<string>,
    currentPage: number,
    pageSize: number
  ): Array<Product> {
    return this.products
      .filter((p) => {
        return (
          this.isPriceInRange(p.price, priceList) &&
          this.isColorInRange(p.color, colorList) &&
          this.isSizeInRange(p.size, sizeList)
        );
      })
      .slice(currentPage * pageSize, currentPage * pageSize + pageSize);
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
      if (priceList[i].minValue == 0 && priceList[i].maxValue == 0) return true;
    }
    return false;
  }
}

export interface PriceFilter {
  minValue: number;
  maxValue: number;
}
