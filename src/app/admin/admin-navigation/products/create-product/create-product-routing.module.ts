import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product.component';

const routes: Routes = [
    { path: '', component: CreateProductComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateProductRoutingModule {}
