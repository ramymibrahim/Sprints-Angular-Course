import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { RatingComponent } from './components/rating/rating.component';
import { CartLineComponent } from './components/cart-line/cart-line.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    CategoriesComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    CartComponent,
    CheckOutComponent,
    ContactComponent,
    DetailComponent,
    ProductsComponent,
    ProductComponent,
    RatingComponent,
    CartLineComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
