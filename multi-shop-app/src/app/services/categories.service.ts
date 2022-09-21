import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor() {}

  getCategories(): Array<Category> {
    return [
      {
        id: 1,
        name: 'Category 1',
        productCount: 100,
        imageUrl: '/assets/img/cat-1.jpg',
      },
      {
        id: 2,
        name: 'Category 2',
        productCount: 300,
        imageUrl: '/assets/img/cat-2.jpg',
      },
      {
        id: 3,
        name: 'Category 3',
        productCount: 300,
        imageUrl: '/assets/img/cat-3.jpg',
      },
      {
        id: 4,
        name: 'Category 4',
        productCount: 400,
        imageUrl: '/assets/img/cat-4.jpg',
      },
      {
        id: 5,
        name: 'Category 1',
        productCount: 100,
        imageUrl: '/assets/img/cat-1.jpg',
      },
    ];
  }
}
