import { AdminSharedModule } from './admin-shared/admin.shared.module';
import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './../admin/admin.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbdSortableHeader, NgbdSortableHeader2, NgbdSortableHeader3, NgbdSortableHeader4 } from '../directives/sortable.directives';
import { ProductViewComponent } from './admin-navigation/product-view/product-view.component';
import { ProductEditComponent } from './admin-navigation/product-edit/product-edit.component';
import { MatListModule } from '@angular/material/list';
import { FormCarouselComponent } from './admin-navigation/form-carousel/form-carousel.component';
import { FormEditCarouselComponent } from './admin-navigation/form-edit-carousel/form-edit-carousel.component';

  @NgModule({
  declarations: [
    AdminComponent,
    AdminNavigationComponent,
    NgbdSortableHeader,
    NgbdSortableHeader2,
    NgbdSortableHeader3,
    NgbdSortableHeader4,
    ProductViewComponent,
    ProductEditComponent,
    FormCarouselComponent,
    FormEditCarouselComponent
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    SharedModule,
    AdminSharedModule,
    MatListModule,
  ],
  exports: [],
  
  providers: []

})
export class AdminModule { }
