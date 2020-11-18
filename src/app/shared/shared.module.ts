import { MainSharedModule } from './../main-shared.module';
import { SupermarketProductsComponent } from './../navigation/supermarket/supermarket-products/supermarket-products.component';
import {  NgbPaginationModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RestaurantProductsComponent } from '../navigation/restaurant/restaurant-products/restaurant-products.component';

import { ProductComponent } from '../product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        SupermarketProductsComponent,
        RestaurantProductsComponent,
        ProductComponent
    ],
    imports: [ 
        CommonModule, MainSharedModule, NgbPaginationModule,MatButtonModule,
        MatIconModule,FormsModule ,
        ReactiveFormsModule, NgbRatingModule
    ],
    exports: [
        SupermarketProductsComponent,
        RestaurantProductsComponent,
        ProductComponent,
        MainSharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class SharedModule {
}
