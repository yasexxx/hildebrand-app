import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { SearchBarRoutingModule } from './search-bar-routing.module';
import { SharedModule } from '../shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        SearchBarComponent
    ],
    imports: [ CommonModule, SearchBarRoutingModule,Ng2SearchPipeModule, SharedModule ],
    exports: [],
    providers: [],
})

export class SearchBarModule {}