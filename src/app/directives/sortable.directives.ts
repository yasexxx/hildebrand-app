import { CustomerList } from './../services/customer';
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ListOfOrders } from '../services/order';
import { MonthlySales } from '../services/monthly-sales';
import { ProductInfo } from '../_services/update-product.service';


export type SortColumn = keyof ProductInfo | '' | number;

export type SortDirection = 'asc' | 'desc' | '';


// for orders
export type SortColumnForOrder = keyof ListOfOrders | '';

//for customers
export type SortColumnForCustomer = keyof CustomerList | '';


//for sales
export type SortColumnForSales = keyof MonthlySales | '';



const rotate: { [ key: string ]: SortDirection } = { 'asc': 'desc' , 'desc': '', '': 'asc'};

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}

// for orders
export interface SortEventForOrder {
    column: SortColumnForOrder;
    direction: SortDirection;
}

// for customers
export interface SortEventForCustomer {
  column: SortColumnForCustomer;
  direction: SortDirection;
}

// for sales

export interface SortEventForSales {
    column: SortColumnForSales;
  direction: SortDirection;
}


@Directive({
    selector: 'th[sortable]',
    host: {
        '[class.asc]': "direction === 'asc'",
        '[class.desc]': "direction === 'desc'",
        '(click)': 'rotate()'
    }
})

export class NgbdSortableHeader {

    @Input() sortable: SortColumn = '';
    @Input() direction: SortDirection = '';
    @Output() sort = new EventEmitter<SortEvent>();

    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction});
    }
}

//---------------
// for orders

@Directive({
    selector: 'th[sortable2]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()'
    }
})


export class NgbdSortableHeader2 {

    @Input() sortable2: SortColumnForOrder = '';
    @Input() direction2: SortDirection = '';
    @Output() sort2 = new EventEmitter<SortEventForOrder>();

    rotate() {
        this.direction2 = rotate[this.direction2];
        this.sort2.emit({ column: this.sortable2, direction: this.direction2});
    }
}


//---------
// for customer


@Directive({
  selector: 'th[sortable3]',
  host: {
      '[class.asc]': 'direction === "asc"',
      '[class.desc]': 'direction === "desc"',
      '(click)': 'rotate()'
  }
})


export class NgbdSortableHeader3 {

  @Input() sortable3: SortColumnForCustomer = '';
  @Input() direction3: SortDirection = '';
  @Output() sort3 = new EventEmitter<SortEventForCustomer>();

  rotate() {
      this.direction3 = rotate[this.direction3];
      this.sort3.emit({ column: this.sortable3, direction: this.direction3});
  }
}




//-------------------
// for sales
@Directive({
    selector: 'th[sortable4]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
        '(click)': 'rotate()'
    }
  })


export class NgbdSortableHeader4 {

    @Input() sortable4: SortColumnForCustomer = '';
    @Input() direction4: SortDirection = '';
    @Output() sort4 = new EventEmitter<SortEventForCustomer>();

    rotate() {
        this.direction4 = rotate[this.direction4];
        this.sort4.emit({ column: this.sortable4, direction: this.direction4});
    }
  }
