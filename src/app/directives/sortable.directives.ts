import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { ProductDetail } from './../services/product-local';
import { ListOfOrders } from '../services/order';

export type SortColumn = keyof ProductDetail | '';
export type SortDirection = 'asc' | 'desc' | '';


// for orders
export type SortColumnForOrder = keyof ListOfOrders | '';


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


@Directive({
    selector: 'th[sortable]',
    host: {
        '[class.asc]': 'direction === "asc"',
        '[class.desc]': 'direction === "desc"',
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