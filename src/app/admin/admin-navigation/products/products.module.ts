import { SupermarketModule } from './../../../navigation/supermarket/supermarket.module';
import { RestaurantModule } from './../../../navigation/restaurant/restaurant.module';
import { ProductsComponent } from './products.component';
import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [ CommonModule, ProductsRoutingModule, AdminSharedModule,
        SharedModule, RestaurantModule, SupermarketModule],
    exports: [],
    providers: [],
})
export class ProductsModule {}