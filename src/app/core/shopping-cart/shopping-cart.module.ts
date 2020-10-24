import { SharedModule } from '../../shared/shared.module';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

@NgModule({
    declarations: [
        ShoppingCartComponent
    ],
    imports: [ CommonModule, ShoppingCartRoutingModule,SharedModule, NgxNumberSpinnerModule],
    exports: [],
    providers: [],
})
export class ShoppingCartModule {}