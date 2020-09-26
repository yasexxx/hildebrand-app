import { SharedModule } from '../../../shared/shared.module';
import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { ProductEditComponent } from './product-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProductEditComponent
    ],
    imports: [ CommonModule, AdminSharedModule, SharedModule ],
    exports: []
})
export class ProductEditModule {}