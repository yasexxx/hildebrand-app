import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component'
import { RouterComponent } from "./router/router.component";
import { WishlistComponent } from './core/wishlist/wishlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AuthGuard, AuthGuardActivate, AuthGuardLoginSignUp } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: RouterComponent,
    children: [
      { path: '', component: HomeComponent, data: {animation: 'HomePage'}},
      { path: 'login', loadChildren: () => import('./navigation/login/login.module').then(m => m.LoginModule), canLoad: [AuthGuardLoginSignUp], data: {animation: 'OtherPage2'}},
      { path: 'register', loadChildren: () => import('./navigation/signup/signup.module').then( m => m.SignUpModule), canLoad: [AuthGuardLoginSignUp], data: {animation: 'OtherPage3'} },
      { path: 'supermarket', loadChildren: () => import('./navigation/supermarket/supermarket.module').then( m => m.SupermarketModule), data: {animation: 'OtherPage4'} },
      { path: 'restaurant', loadChildren:() => import('./navigation/restaurant/restaurant.module').then( m => m.RestaurantModule), data: {animation: 'FilterPage'} },
      { path: 'cart', loadChildren:() => import('./core/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartModule), data: {animation: 'OtherPage5'} },
      { path: 'wishlist', component: WishlistComponent, canActivate: [AuthGuardActivate] , data: {animation: 'OtherPage'}},
      { path: 'product/id/:id', loadChildren: () => import('./product/product.module').then( l => l.ProductModule), data: {animation: 'OtherPage6'}},
      { path: 'user', loadChildren: () => import('./users/users.module').then( m => m.UsersModule), canLoad: [AuthGuard], data: {animation: 'OtherPage7'}},
      { path: 'check-out', loadChildren: () => import('./navigation/checkout/checkout.module').then(m => m.CheckoutModule), canLoad: [AuthGuard], data: {animation: 'OtherPage4'} },
      { path: 'search', loadChildren: () => import('./shared/search-bar/search-bar.module').then(m => m.SearchBarModule), data: {animation: 'OtherPage5'} },
      { path: 'services', loadChildren: () => import('./navigation/services/services.module').then(m => m.ServicesModule), data: {animation: 'FilterPage'}  },
      { path: 'contact', loadChildren: () => import('./navigation/contact/contact.module').then(m => m.ContactModule), data: {animation: 'OtherPage6'} },
      { path: 'about', loadChildren: () => import('./navigation/about/about.module').then(m => m.AboutModule), data: {animation: 'OtherPage2'}  },
      { path: 'privacy-policy', loadChildren: () => import('./navigation/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule), data: {animation: 'OtherPage3'} },
      { path: 'terms', loadChildren: () => import('./navigation/terms-condition/terms-condition.module').then(m => m.TermsConditionModule), data: {animation: 'OtherPage4'} },
      { path: 'customer-service', loadChildren: () => import('./navigation/customer-service/customer-service.module').then(m => m.CustomerServiceModule), data: {animation: 'OtherPage7'} },
      { path: 'home' , redirectTo: '', pathMatch: 'full'  }
              ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canLoad: [AuthGuard], data: {animation: 'FilterPage'}},
	{ path: '**', component: PageNotFoundComponent}
	];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

