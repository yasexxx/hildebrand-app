import { SalesComponent } from './sales.component';
import { AdminSharedModule } from './../../admin-shared/admin.shared.module';
import { SalesRoutingModule } from './sales-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSharedModule } from 'src/app/main-shared.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        SalesComponent
    ],
    imports: [ CommonModule, SalesRoutingModule, AdminSharedModule, SharedModule],
    exports: [],
    providers: [],
})
export class SalesModule {}