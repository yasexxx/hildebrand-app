import { UpdateProductRoutingModule } from './update-product-routing.module';
import { AdminSharedModule } from './../../../admin-shared/admin.shared.module';
import { UpdateProductComponent } from './update-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        UpdateProductComponent
    ],
    imports: [ CommonModule, UpdateProductRoutingModule, AdminSharedModule, SharedModule],
    exports: []
})
export class UpdateProductModule {}