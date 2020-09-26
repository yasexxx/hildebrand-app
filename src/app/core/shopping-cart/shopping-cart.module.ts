import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ShoppingCartComponent
    ],
    imports: [ CommonModule, ShoppingCartRoutingModule ],
    exports: [],
    providers: [],
})
export class ShoppingCartModule {}