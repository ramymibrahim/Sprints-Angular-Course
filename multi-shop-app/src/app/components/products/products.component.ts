import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  @Input() title: string = 'Products';
  @Input() type: string = '';
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts(this.type);
  }
}
