import { FormEditCarouselComponent } from './admin-navigation/form-edit-carousel/form-edit-carousel.component';
import { FormCarouselComponent } from './admin-navigation/form-carousel/form-carousel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { ProductEditComponent } from './admin-navigation/product-edit/product-edit.component';
import { ProductViewComponent } from './admin-navigation/product-view/product-view.component';

import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ProductComponent } from '../product/product.component';

const routes: Routes = [
  { path:'',component: AdminNavigationComponent,
    children: [
      { path:'dashboard', loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule) },
      { path:'sales', loadChildren: () => import('./admin-navigation/sales/sales.module').then(m => m.SalesModule) },
      { path:'products', loadChildren: () => import('./admin-navigation/products/products.module').then(m => m.ProductsModule) },
      { path:'create', loadChildren: () => import('./admin-navigation/products/create-product/create-product.module').then(m => m.CreateProductModule) },
      { path:'edit', loadChildren: () => import('./admin-navigation/products/update-product/update-product.module').then(m => m.UpdateProductModule) },
      { path: 'edit/:id', component: ProductEditComponent },
      { path: 'edit/view/:id', component: ProductViewComponent },
      { path: 'orders', loadChildren: () => import('./admin-navigation/orders/orders.module').then(m => m.OrdersModule) },
      { path: 'customers', loadChildren: () => import('./admin-navigation/customers/customers.module').then(m => m.CustomersModule) },
      { path: '' , redirectTo: 'dashboard' , pathMatch:'full' },
      { path: 'product/:id', component: ProductComponent },
      { path: 'create-carousel', component: FormCarouselComponent },
      { path: 'edit-carousel/:id', component: FormEditCarouselComponent },
      { path: '**', component: PageNotFoundComponent }
    ]},
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
