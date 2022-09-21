import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [
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
  id: number = 1;
  categoryName: string = '';
  categoryImage: string = '';
  productCount: number = 0;
  constructor() {}

  ngOnInit(): void {}

  addCategory() {
    this.categories.push({
      id: this.id,
      imageUrl: this.categoryImage,
      name: this.categoryName,
      productCount: this.productCount,
    });
    this.id++;
  }

  deleteCategory(id: number) {
    let index = this.categories.findIndex((x) => x.id == id);
    this.categories.splice(index, 1);
  }
}
