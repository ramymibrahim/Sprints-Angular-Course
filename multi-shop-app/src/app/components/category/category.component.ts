import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  isAddedToCart: boolean = false;
  @Input() category: Category = {} as Category;
  @Output() deleteEmitter = new EventEmitter<number>();
  constructor() {}

  delete(id: number) {
    if (confirm('Are you sure?')) this.deleteEmitter.emit(id);
  }

  addToCart() {
    this.isAddedToCart = true;
  }

  removeToCart() {
    this.isAddedToCart = false;
  }
}
