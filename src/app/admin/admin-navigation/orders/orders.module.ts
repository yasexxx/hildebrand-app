import { OrdersComponent } from './orders.component';
import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [ CommonModule, OrdersRoutingModule, AdminSharedModule, SharedModule ],
    exports: [],
    providers: [],
})
export class OrdersModule {}