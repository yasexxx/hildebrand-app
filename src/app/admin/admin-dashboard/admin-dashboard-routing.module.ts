import { AdminDashboardComponent } from './admin-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: AdminDashboardComponent }
];

@NgModule({
    imports: [
        CommonModule, 
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
