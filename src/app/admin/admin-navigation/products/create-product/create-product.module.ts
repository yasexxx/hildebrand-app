import { CreateProductRoutingModule } from './create-product-routing.module';
import { AdminSharedModule } from './../../../admin-shared/admin.shared.module';
import { CreateProductComponent } from './create-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        CreateProductComponent
    ],
    imports: [ CommonModule, CreateProductRoutingModule, AdminSharedModule, SharedModule ],
    exports: [],
    providers: [],
})
export class CreateProductModule {}