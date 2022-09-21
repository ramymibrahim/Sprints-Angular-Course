import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Array<Category> = [];
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
}
