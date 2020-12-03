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
import { SocialAuthServiceConfig , GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';


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
                {
                    provide: 'SocialAuthServiceConfig',
                    useValue: {
                        autoLogin: false,
                        providers: [
                            {
                                id: GoogleLoginProvider.PROVIDER_ID,
                                provider: new GoogleLoginProvider(
                                    '595229418045-ur6bjoq049qkhink03t6ku6gp1709mut.apps.googleusercontent.com'
                                )
                            },
                            {
                                id: FacebookLoginProvider.PROVIDER_ID,
                                provider: new FacebookLoginProvider('1732092800309947')
                            }
                        ]
                    } as SocialAuthServiceConfig
                },
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
