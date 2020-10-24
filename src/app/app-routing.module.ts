import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component'
import { RouterComponent } from "./router/router.component";
import { WishlistComponent } from './core/wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard, AuthGuardActivate } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: RouterComponent,
    children: [
      { path: '', component: HomeComponent,},
      { path: 'login', loadChildren: () => import('./navigation/login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./navigation/signup/signup.module').then( m => m.SignUpModule) },
      { path: 'supermarket', loadChildren: () => import('./navigation/supermarket/supermarket.module').then( m => m.SupermarketModule) },
      { path: 'restaurant', loadChildren:() => import('./navigation/restaurant/restaurant.module').then( m => m.RestaurantModule) },
      { path: 'cart', loadChildren:() => import('./core/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartModule), canLoad:[AuthGuard] },
      { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuardActivate] },
      { path: 'product/id/:id', loadChildren: () => import('./product/product.module').then( l => l.ProductModule)},
      { path: 'user', loadChildren: () => import('./users/users.module').then( m => m.UsersModule)},

      { path: 'home' , redirectTo: '', pathMatch: 'full', }
              ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard]},
	{ path: '**', component: PageNotFoundComponent }
	];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
