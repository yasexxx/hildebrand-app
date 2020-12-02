import { HomeComponent } from './core/home/home.component';
import { CarouselService } from './_services/carousel.service';
import { NgbCarouselModule, NgbDropdownModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FeaturedProductComponent } from './core/home/featured-product/featured-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuicklinkModule } from 'ngx-quicklink';
import { environment } from '../environments/environment';
import { LoaderInterceptor } from './_helpers/loader.interceptor';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { ProductServiceOperation } from './_services/product.services';
import { LoaderService } from './_services/loader.service';
import { ProductService } from './_services/update-product.service';
import { OrderService } from './services/order.service';
import { CustomerService } from './services/customer.service';
import { OnlineOrderService } from './services/online-order.service';
import { TokenStackService } from './_services/token-stack.service';
import { AuthService } from './_services/auth.service';
import { UserService } from './_services/user.service';
import { AuthGuard, AuthGuardActivate, AuthGuardActivate2, AuthGuardLoginSignUp } from './shared/auth.guard';
import { NavService } from './shared/nav.service';
import { CartService } from './_services/cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserOrderComponent } from './users/user-order/user-order.component';
import { ShoppingCartComponent } from './core/shopping-cart/shopping-cart.component';
import { SearchService } from './_services/search.service';
import { FilterArrayPipe } from './pipe/count-pipe';
import { CustomSearchFilterPipe } from './pipe/search-pipe';

@NgModule({
    declarations: [
        FeaturedProductComponent,
        HomeComponent,
        FilterArrayPipe,
        CustomSearchFilterPipe
    ],
    imports: [
        CommonModule,
        NgbNavModule,
        QuicklinkModule,
        HttpClientModule,
        NgbCarouselModule,
        FontAwesomeModule
    ],
    exports: [
        NgbNavModule,
        NgbDropdownModule,
        FeaturedProductComponent,
        HttpClientModule,
        QuicklinkModule,
        HomeComponent,
        FilterArrayPipe,
        CustomSearchFilterPipe
    ]
})
export class MainSharedModule {
    static forRoot(): ModuleWithProviders<MainSharedModule> {
        return {
            ngModule: MainSharedModule,
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
                ProductServiceOperation,
                LoaderService,
                DecimalPipe ,
                ProductService,
                OrderService,
                CustomerService,
                OnlineOrderService,
                AuthService,
                TokenStackService,
                UserService,
                AuthGuard,
                AuthGuardLoginSignUp,
                AuthGuardActivate2,
                UserOrderComponent,
                ShoppingCartComponent,
                AuthGuardActivate,
                CarouselService,
                NavService,
                CartService,
                SearchService
            ]
        }
    }
}

export function getBaseUrl(): string {
    return environment.API_URL;
  }
