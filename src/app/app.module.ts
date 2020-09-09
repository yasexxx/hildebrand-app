import { ProductServiceOperation } from './_services/product.services';
import { ProductComponent } from './product/product.component';
import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './navigation/login/login.component';
import { SignupComponent } from './navigation/signup/signup.component';
import { FooterComponent } from './core/footer/footer.component';
import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';
import { UserLinksComponent } from './core/user-links/user-links.component';
import { HeaderComponent } from './core/header/header.component';
import { SupermarketComponent } from './navigation/supermarket/supermarket.component';
import { RestaurantComponent } from './navigation/restaurant/restaurant.component';

import { DropOpenDirective } from './directives/custom-dropdown';
import { LoadedDirective } from './directives/image/img.directives';

import { ProductLocalService } from './services/product-local.service';
import { RouterComponent } from './router/router.component';
import { MatBadgeModule } from '@angular/material/badge';
import { WishlistComponent } from './core/wishlist/wishlist.component';

import {MatSelectModule} from '@angular/material/select';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { AuthGuard } from './shared/auth.guard';
import { NavService } from './shared/nav.service';
import { UserService } from './shared/user.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DropOpenDirective,
    LoadedDirective,
    FooterComponent,
    ShoppingCartComponent,
    UserLinksComponent,
    HeaderComponent,
    SupermarketComponent,
    RestaurantComponent,
    RouterComponent,
    WishlistComponent,
    ProductComponent,
    PageNotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    FontAwesomeModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    NgxNumberSpinnerModule,
    UsersModule,
    AdminModule,
    MatBadgeModule,
    MatSelectModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl },
    ProductLocalService,
    AuthGuard,
    NavService,
    UserService,
    ProductServiceOperation
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getBaseUrl(){
  return environment.API_URL;
}
