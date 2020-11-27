import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';

const routes: Routes = [
    { path: '', component: SearchBarComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchBarRoutingModule {}
