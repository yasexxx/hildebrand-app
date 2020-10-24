import { SupermarketRoutingModule } from './supermarket-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { SupermarketComponent } from './supermarket.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SupermarketComponent
    ],
    imports: [ CommonModule, SharedModule, SupermarketRoutingModule ],
    exports: [
        SupermarketComponent
    ]
})
export class SupermarketModule {}