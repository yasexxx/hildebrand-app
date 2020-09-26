import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './update-product.component';

const routes: Routes = [
    { path: '', component: UpdateProductComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateProductRoutingModule {}
