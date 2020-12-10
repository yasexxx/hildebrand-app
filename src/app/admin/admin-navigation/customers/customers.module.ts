import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { CustomersRoutingModule } from './customers-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';
import { SharedModule } from './../../../shared/shared.module';

@NgModule({
    declarations: [
        CustomersComponent
    ],
    imports: [ CommonModule, CustomersRoutingModule, AdminSharedModule, SharedModule ],
    exports: [],
    providers: [],
})
export class CustomersModule {}