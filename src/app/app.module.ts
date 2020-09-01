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
import { ProductComponent } from './navigation/product/product.component';
import { LoginComponent } from './navigation/login/login.component';
import { SignupComponent } from './navigation/signup/signup.component';
import { FooterComponent } from './core/footer/footer.component';
import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';
import { UserLinksComponent } from './core/user-links/user-links.component';
import { HeaderComponent } from './core/header/header.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { LogoComponent } from './shared/logo/logo.component';
import { SupermarketComponent } from './navigation/supermarket/supermarket.component';
import { RestaurantComponent } from './navigation/restaurant/restaurant.component';

import { DropOpenDirective } from './directives/custom-dropdown';
import { LoadedDirective } from './directives/image/img.directives';

import { ProductLocalService } from './services/product-local.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterComponent } from './router/router.component';
import { MatBadgeModule } from '@angular/material/badge';
import { WishlistComponent } from './core/wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
    DropOpenDirective,
    LoadedDirective,
    FooterComponent,
    ShoppingCartComponent,
    UserLinksComponent,
    HeaderComponent,
    SearchBarComponent,
    LogoComponent,
    SupermarketComponent,
    RestaurantComponent,
    RouterComponent,
    WishlistComponent

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
    HttpClientModule,
    MatBadgeModule
  ],
  providers: [ProductLocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
