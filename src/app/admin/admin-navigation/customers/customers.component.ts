import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { CustomerList } from '../../../services/customer';
import { Observable } from 'rxjs';
import { NgbdSortableHeader3, SortEventForCustomer } from '../../../directives/sortable.directives';
import { CustomerService } from '../../../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customers$ : Observable<CustomerList[]>;
  total$ : Observable<number>;

  @ViewChildren(NgbdSortableHeader3) headers: QueryList<NgbdSortableHeader3>;

  constructor(public service: CustomerService) { 
    
    this.customers$ = service.customers$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEventForCustomer) {
    //resetting other headers
    this.headers.forEach( header => {
      if(header.sortable3 ! == column) {
        header.direction3 = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  ngOnInit(): void {
  }

}
