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
import { ContentHeaderComponent } from './content-header/content-header.component';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';


@NgModule({
    declarations: [
        SupermarketProductsComponent,
        RestaurantProductsComponent,
        ProductComponent,
        ContentHeaderComponent
    ],
    imports: [ 
        CommonModule, MainSharedModule, NgbPaginationModule,MatButtonModule,
        MatIconModule,FormsModule ,
        ReactiveFormsModule, NgbRatingModule, NgxNumberSpinnerModule
    ],
    exports: [
        SupermarketProductsComponent,
        RestaurantProductsComponent,
        ProductComponent,
        MainSharedModule,
        FormsModule,
        ReactiveFormsModule,
        ContentHeaderComponent
    ]
})

export class SharedModule {
}
