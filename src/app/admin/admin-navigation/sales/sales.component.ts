import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MonthlySales } from '../../../services/monthly-sales';
import { Observable } from 'rxjs';
import { NgbdSortableHeader4, SortEventForSales } from '../../../directives/sortable.directives';
import { SalesService } from '../../../services/product-sales.service';


interface ModifySales {
  id: number;
  month: string;
  revenue: number;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})


export class SalesComponent implements OnInit {

  sales$ : Observable<MonthlySales[]>;
  total$ : Observable<number>;

  modifySalesArray;

  @ViewChildren(NgbdSortableHeader4) headers: QueryList<NgbdSortableHeader4>;

  constructor(public service: SalesService) {
    this.sales$ = service.sales$;
    this.total$ = service.total$;
   }

  onSort({column, direction}: SortEventForSales) {
    //resetting other headers
    this.headers.forEach( header => {
      if(header.sortable4 ! == column) {
        header.direction4 = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngOnInit(): void {
  }


}


