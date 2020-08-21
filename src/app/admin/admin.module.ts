import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './../admin/admin.component';
import { AddOrEditCategoryComponent } from './../admin/add-or-edit-category/add-or-edit-category.component';
import { AddOrEditProductComponent } from './../admin/add-or-edit-product/add-or-edit-product.component';
import { ListingCategoriesComponent } from './../admin/listing-categories/listing-categories.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AdminComponent,
    AddOrEditCategoryComponent,
    AddOrEditProductComponent,
    ListingCategoriesComponent,
    AdminNavigationComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    AdminComponent,
    AddOrEditCategoryComponent,
    AddOrEditProductComponent,
    ListingCategoriesComponent
  ]
})
export class AdminModule { }
