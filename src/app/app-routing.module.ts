import { ProductComponent } from './product/product.component';
import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';
import { RestaurantComponent } from './navigation/restaurant/restaurant.component';
import { SupermarketComponent } from './navigation/supermarket/supermarket.component';
import { SignupComponent } from './navigation/signup/signup.component';
import { LoginComponent } from './navigation/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component'
import { RouterComponent } from "./router/router.component";
import { WishlistComponent } from './core/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: RouterComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register',component: SignupComponent },
      { path: 'supermarket',component:SupermarketComponent },
      { path: 'restaurant',component: RestaurantComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'product', component: ProductComponent },

      
      { path: '' , redirectTo: 'home', pathMatch: 'full', }
              ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
	{ path: '**', redirectTo: '/' }
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
