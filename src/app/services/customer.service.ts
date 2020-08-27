import { SortColumnForCustomer, SortDirection, SortColumnForOrder } from './../directives/sortable.directives';
import { CustomerList } from './customer';
import { PipeTransform, Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable, of } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { CustomerDetails } from './customer-details';



interface SearchCustomerResult {
  customers: CustomerList[];
  total: number;

}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumnForCustomer;
  sortDirection: SortDirection;
}

const compare = ( v1: string | number, v2: string| number) => (
  v1 < v2 ? -1 : v1 > v2 ? 1: 0 )


function sort(customers: CustomerList[], column:SortColumnForCustomer, direction: string ) {
if (direction ==='' || column === '') {
  return customers;
} else {
  return [...customers].sort((a,b) => {
    const res = compare(a[column], b[column]);
    return direction === 'asc' ? res : -res;
  });
}

}

function matches (customer: CustomerList, term: string, pipe: PipeTransform){
  return customer.userName.toLowerCase().includes(term.toLowerCase())
  || customer.account.toLowerCase().includes(term.toLowerCase())
  || customer.order.toLowerCase().includes(term.toLowerCase())
  || pipe.transform(customer.purchase).includes(term)
  || pipe.transform(customer.id).includes(term);
}

@Injectable({providedIn: 'any'})
export class CustomerService {
    private _loading$ = new BehaviorSubject<boolean>(true);
    private _search$ = new Subject<void>();
    private _customers$ = new BehaviorSubject<CustomerList[]>([]);
    private _total$ = new BehaviorSubject<number>(0);

    private _state : State = {
        page: 1,
        pageSize: 10,
        searchTerm: '',
        sortColumn: '',
        sortDirection: ''
    };


    constructor(private pipe: DecimalPipe ) {
        this._search$.pipe(
            tap(()=> this._loading$.next(true)),
            debounceTime(200),
            switchMap(()=> this._search()),
            delay(200),
            tap(()=> this._loading$.next(false)))
            .subscribe( result => {
                this._customers$.next(result.customers);
                this._total$.next(result.total);
            } );
        this._search$.next();
    }

    get customers$() {return this._customers$.asObservable();}

    get total$() { return this._total$.asObservable();}

    get loading$() { return this._loading$.asObservable();}

    get page() {return this._state.page; }

    get pageSize() { return this._state.pageSize; }

    get searchTerm() {
        return this._state.searchTerm; }

    set page(page: number) { this._set({page});}

    set pageSize(pageSize: number) { this._set({pageSize});}

    set searchTerm(searchTerm: string) { this._set({searchTerm});}

    set sortColumn(sortColumn: SortColumnForCustomer) {this._set({sortColumn});}

    set sortDirection(sortDirection: SortDirection) { this._set({sortDirection});}

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchCustomerResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

        let customers = sort(CustomerDetails, sortColumn, sortDirection);

        customers = customers.filter( product => matches(product, searchTerm, this.pipe));


        const total = customers.length;

        //paginate
        customers = customers.slice((page-1)*pageSize, (page - 1)* pageSize+pageSize);
        return of({customers, total});
    }

}