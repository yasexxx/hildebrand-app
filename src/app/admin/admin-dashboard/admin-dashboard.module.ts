import { AdminSharedModule } from './../admin-shared/admin.shared.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        AdminDashboardComponent,
        CardComponent,
        AdminTableComponent,
        MiniCardComponent,

    ],
    imports: [ 
        CommonModule, 
        AdminDashboardRoutingModule,
        AdminSharedModule,
        MatGridListModule,
        SharedModule
    ],
    exports: [
    ]
})
export class AdminDashboardModule {}