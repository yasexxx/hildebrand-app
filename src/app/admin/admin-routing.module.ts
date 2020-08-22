import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SalesComponent } from './admin-navigation/sales/sales.component'
import { ProductsComponent } from './admin-navigation/products/products.component'
import { OrdersComponent } from './admin-navigation/orders/orders.component';
import { CustomersComponent } from './admin-navigation/customers/customers.component';


const routes: Routes = [
  { path:'',component: AdminDashboardComponent},
  { path:'sales',component: SalesComponent },
  { path:'products',component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'customers', component:CustomersComponent},
  { path: 'dashboard' ,redirectTo:'' , pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
