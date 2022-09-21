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
      imageUrl: '/assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'featured',
      size:'s',
      color:'black'
    },
    {
      id: 2,
      name: 'Product 1',
      discount: 0.2,
      imageUrl: '/assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size:'m',
      color:'black'
    },
    {
      id: 3,
      name: 'Product 1',
      discount: 0.2,
      imageUrl: '/assets/img/product-1.jpg',
      price: 100,
      rating: 4.5,
      ratingCount: 100,
      type: 'recent',
      size:'l',
      color:'black'
    },
  ];

  constructor() {}
  getProducts(type: string): Array<Product> {
    return this.products.filter((x) => x.type == type);
  }

  getProductById(id: number): Product {
    return this.products.find((x) => x.id == id) ?? {} as Product;
  }
}
