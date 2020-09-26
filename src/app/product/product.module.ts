import { SharedModule } from './../shared/shared.module';
import { NotificationsService } from 'angular2-notifications';
import { ProductServiceOperation } from './../_services/product.services';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
    ],
    imports: [ CommonModule, ProductRoutingModule, SharedModule ],
    exports: [],
    providers: [
        ProductServiceOperation,
        NotificationsService
    ],
    bootstrap:[ProductComponent]
})
export class ProductModule {}