import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [
        SearchBarComponent
    ],
    imports: [ CommonModule, SearchBarRoutingModule, SharedModule ],
    exports: [],
    providers: [],
})

export class SearchBarModule {}