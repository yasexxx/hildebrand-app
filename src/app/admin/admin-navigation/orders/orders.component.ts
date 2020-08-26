import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NgbdSortableHeader2, SortEventForOrder } from '../../../directives/sortable.directives';
import { Observable } from 'rxjs';
import { ListOfOrders } from '../../../services/order';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders$ : Observable<ListOfOrders[]>;
  total$ : Observable<number>;

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: OrderService) {
    this.orders$ = service.orders$;
    this.total$ = service.total$;
   }

  onSort({column, direction}: SortEventForOrder) {
    //resetting other headers
    this.headers.forEach( header => {
      if(header.sortable2 ! == column) {
        header.direction2 = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  ngOnInit(): void {
  }

}
