import { OrderService } from './../services/order.service';
import { OnlineOrderService } from './../services/online-order.service';
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
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CardComponent } from './admin-dashboard/card/card.component';
import { ProductSalesChartComponent } from './admin-dashboard/charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './admin-dashboard/charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './admin-dashboard/charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './admin-dashboard/charts/store-sessions-chart/store-sessions-chart.component';
import { SalesService } from '../services/sales.service';
import { OrdersTableComponent } from './admin-dashboard/orders-table/orders-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AdminComponent,
    AddOrEditCategoryComponent,
    AddOrEditProductComponent,
    ListingCategoriesComponent,
    AdminNavigationComponent,
    AdminDashboardComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    OrdersTableComponent
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
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatGridListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    AdminComponent,
    AddOrEditCategoryComponent,
    AddOrEditProductComponent,
    ListingCategoriesComponent,
    AdminNavigationComponent,
    AdminDashboardComponent,
    CardComponent,
    AnnualSalesChartComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    StoreSessionsChartComponent
  ],
  providers: [SalesService,OnlineOrderService,OrderService]
})
export class AdminModule { }
