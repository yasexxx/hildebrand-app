import { UsersModule } from './users/users.module';
import { ProductLocalService } from './services/product-local.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { ProductComponent } from './navigation/product/product.component';
import { LoginComponent } from './navigation/login/login.component';
import { SignupComponent } from './navigation/signup/signup.component';


import { CustomBreakPointsProvider } from './directives/layout/custom-breakpoints';
import { CustomClassDirective } from './directives/layout/custom-flex-directives';
import { CustomShowHideDirective } from './directives/layout/custom-showhide-directives';
import { CustomStyleDirective } from './directives/layout/custom-style-directives';
import { CustomLayoutDirective } from './directives/layout/custom-layout-directives';
import { DropOpenDirective } from './directives/custom-dropdown';
import { LoadedDirective } from './directives/image/img.directives';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './core/footer/footer.component';
import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';
import { UserLinksComponent } from './core/user-links/user-links.component';
import { HeaderComponent } from './core/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { AddOrEditCategoryComponent } from './admin/add-or-edit-category/add-or-edit-category.component';
import { AddOrEditProductComponent } from './admin/add-or-edit-product/add-or-edit-product.component';
import { ListingCategoriesComponent } from './admin/listing-categories/listing-categories.component';
import { CategoryInHomeComponent } from './core/category-in-home/category-in-home.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { LogoComponent } from './shared/logo/logo.component';
import { SupermarketComponent } from './navigation/supermarket/supermarket.component';
import { RestaurantComponent } from './navigation/restaurant/restaurant.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
	CustomShowHideDirective,
	CustomClassDirective,
	CustomStyleDirective,
	CustomLayoutDirective,
  DropOpenDirective,
  LoadedDirective,
	FooterComponent,
	ShoppingCartComponent,
	UserLinksComponent,
	HeaderComponent,
	AdminComponent,
	AddOrEditCategoryComponent,
	AddOrEditProductComponent,
	ListingCategoriesComponent,
	CategoryInHomeComponent,
	SearchBarComponent,
	LogoComponent,
	SupermarketComponent,
	RestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
	FlexLayoutModule,
	MatButtonModule,
	MatIconModule,
  NgbModule,
  NgxNumberSpinnerModule,
  UsersModule
  ],
  providers: [CustomBreakPointsProvider, ProductLocalService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
