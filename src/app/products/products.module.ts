import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductInCartComponent } from './product-in-cart/product-in-cart.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductsComponent } from './products.component';


@NgModule({
  declarations: [CategoriesListComponent, CategoryComponent, ProductComponent, ProductDetailsComponent, ProductInCartComponent, ProductsContainerComponent, ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
