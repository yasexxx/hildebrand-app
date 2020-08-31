import { NgbdSortableHeader3, NgbdSortableHeader4 } from './../directives/sortable.directives';
import { OrderService } from './../services/order.service';
import { OnlineOrderService } from './../services/online-order.service';
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './../admin/admin.component';
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
import { AdminTableComponent } from './admin-dashboard/admin-table/admin-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MiniCardComponent } from './admin-dashboard/mini-card/mini-card.component';
import { StoreSummaryService } from '../services/store-summary.service';
import { SalesComponent } from './admin-navigation/sales/sales.component';
import { ProductsComponent } from './admin-navigation/products/products.component';
import { CustomersComponent } from './admin-navigation/customers/customers.component';
import { OrdersComponent } from './admin-navigation/orders/orders.component';
import { ProductLocalService } from './../services/product-local.service';
import { FeaturedProductComponent } from '../core/home/featured-product/featured-product.component';
import { TopProductComponent } from '../core/home/top-product/top-product.component';
import { LatestProductComponent } from '../core/home/latest-product/latest-product.component';
import { RestaurantProductsComponent } from './../navigation/restaurant/restaurant-products/restaurant-products.component';
import { SupermarketProductsComponent } from './../navigation/supermarket/supermarket-products/supermarket-products.component';
import { CreateProductComponent } from './admin-navigation/products/create-product/create-product.component';
import { UpdateProductComponent } from './admin-navigation/products/update-product/update-product.component';
import { ProductService } from '../services/product.service';
import { NgbdSortableHeader, NgbdSortableHeader2 } from '../directives/sortable.directives';
import { CustomerService } from '../services/customer.service';
import { SalesService } from '../services/product-sales.service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


  @NgModule({
  declarations: [
    AdminComponent,
    AdminNavigationComponent,
    AdminDashboardComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    AdminTableComponent,
    MiniCardComponent,
    SalesComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    FeaturedProductComponent,
	  TopProductComponent,
    LatestProductComponent,
    RestaurantProductsComponent,
    SupermarketProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    NgbdSortableHeader,
    NgbdSortableHeader2,
    NgbdSortableHeader3,
    NgbdSortableHeader4
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
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    AdminComponent,
    AdminNavigationComponent,
    AdminDashboardComponent,
    CardComponent,
    AnnualSalesChartComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    StoreSessionsChartComponent,
    AdminTableComponent,
    FeaturedProductComponent,
	  TopProductComponent,
    LatestProductComponent,
    RestaurantProductsComponent,
    SupermarketProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    NgbdSortableHeader,
    NgbdSortableHeader2,
    NgbdSortableHeader3,
    NgbdSortableHeader4
  ],
  providers: [ SalesService,CustomerService ,DecimalPipe ,ProductService ,ProductLocalService,OnlineOrderService,OrderService,StoreSummaryService]

})
export class AdminModule { }
