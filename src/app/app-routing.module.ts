
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: RouterComponent,
    children: [
      { path: '', component: HomeComponent,},
      { path: 'login', component: LoginComponent },
      { path: 'register',component: SignupComponent },
      { path: 'supermarket',component:SupermarketComponent },
      { path: 'restaurant',component: RestaurantComponent },
      { path: 'cart', component: ShoppingCartComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'product/id/:id', component: ProductComponent},
      { path: 'profile', component: UserProfileComponent },
    
      { path: 'home' , redirectTo: '', pathMatch: 'full', }
              ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
	{ path: '**', component: PageNotFoundComponent }
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
