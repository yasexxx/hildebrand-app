import { RestaurantRoutingModule } from './restaurant-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { RestaurantComponent } from './restaurant.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSharedModule } from 'src/app/main-shared.module';

@NgModule({
    declarations: [
        RestaurantComponent
    ],
    imports: [ CommonModule, SharedModule, RestaurantRoutingModule ],
    exports: []
})
export class RestaurantModule {}