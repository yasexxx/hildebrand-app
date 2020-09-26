import { OrdersComponent } from './orders.component';
import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSharedModule } from 'src/app/main-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        OrdersComponent
    ],
    imports: [ CommonModule, OrdersRoutingModule, AdminSharedModule, SharedModule ],
    exports: [],
    providers: [],
})
export class OrdersModule {}