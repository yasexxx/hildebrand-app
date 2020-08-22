import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';
import { RestaurantComponent } from './navigation/restaurant/restaurant.component';
import { SupermarketComponent } from './navigation/supermarket/supermarket.component';
import { SignupComponent } from './navigation/signup/signup.component';
import { LoginComponent } from './navigation/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component'
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';


const routes: Routes = [
	{ path: 'home' , redirectTo: '', pathMatch: 'full', },
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register',component: SignupComponent},
  { path: 'supermarket',component:SupermarketComponent },
  { path: 'restaurant',component: RestaurantComponent},
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
	{ path: '**', redirectTo: '/' }
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
