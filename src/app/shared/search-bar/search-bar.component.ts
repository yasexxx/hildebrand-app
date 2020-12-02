import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductServiceOperation } from '../../_services/product.services';
import { SearchService } from '../../_services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, OnDestroy {

  itemResult = [];

  filterKey = '';

  subscription$: Subscription;
  subscription2$: Subscription;

  validationNetwork = false;
  numberResult = 0;
  constructor(private searchService: SearchService) { }
  
  ngOnInit(): void {
    this.validationNetwork = this.searchService.networkValidation;
    this.subscription$ = this.searchService.searchArrayAlt$
      .subscribe( arr => {
        this.itemResult = arr;
      });
    this.subscription2$ = this.searchService.searchKeyword$
      .subscribe( str => {
        this.filterKey = str;
      });
  }


  ngOnDestroy(): void {
    if(this.subscription$) { this.subscription$.unsubscribe();}
    if(this.subscription2$) { this.subscription2$.unsubscribe();}
  }

}
