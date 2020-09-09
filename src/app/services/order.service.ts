import { Injectable, PipeTransform } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject, Subscription } from 'rxjs';
import { Order, ListOfOrders } from './order';
import { SortDirection, SortColumnForOrder } from '../directives/sortable.directives';
import { DecimalPipe } from '@angular/common';
import { tap, debounceTime, switchMap, delay } from 'rxjs/operators';
import { OrdersDetails } from './orders-details';




interface SearchOrderResult {
  orders: ListOfOrders[];
  total:number;

}

interface State {
  page:number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumnForOrder;
  sortDirection: SortDirection;
}


const compare = ( v1: string | number, v2: string| number) => (
    v1 < v2 ? -1 : v1 > v2 ? 1: 0 )


function sort(orders: ListOfOrders[], column:SortColumnForOrder, direction: string ) {
  if (direction ==='' || column === '') {
    return orders;
  } else {
    return [...orders].sort((a,b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }

}


function matches (order: ListOfOrders, term: string, pipe: PipeTransform ){
  return order.userName.toLowerCase().includes(term.toLowerCase())
        || order.fullName.toLowerCase().includes(term.toLowerCase())
        || order.location.toLowerCase().includes(term.toLowerCase())
        || order.status.toLowerCase().includes(term.toLowerCase())
        || order.productOrder.toLowerCase().includes(term.toLowerCase())
        || pipe.transform(order.totalOrder).includes(term)
        || pipe.transform(order.id).includes(term);

}

@Injectable({
  providedIn: 'any'
})
export class OrderService{

  private _subscription$ : Subscription;

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _orders$ = new BehaviorSubject<ListOfOrders[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state : State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._subscription$ = this._search$.pipe(
      tap(()=> this._loading$.next(true)),
      debounceTime(200),
      switchMap(()=> this._search()),
      delay(200),
      tap(()=> this._loading$.next(false)))
      .subscribe( result => {
          this._orders$.next(result.orders);
          this._total$.next(result.total);
      } );
  this._search$.next();
  }

  get orders$() {return this._orders$.asObservable();}

    get total$() { return this._total$.asObservable();}

    get loading$() { return this._loading$.asObservable();}

    get page() {return this._state.page; }

    get pageSize() { return this._state.pageSize; }

    get searchTerm() {
        return this._state.searchTerm; }

    set page(page: number) { this._set({page});}

    set pageSize(pageSize: number) { this._set({pageSize});}

    set searchTerm(searchTerm: string) { this._set({searchTerm});}

    set sortColumn(sortColumn: SortColumnForOrder) {this._set({sortColumn});}

    set sortDirection(sortDirection: SortDirection) { this._set({sortDirection});}

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchOrderResult> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

        let orders= sort(OrdersDetails, sortColumn, sortDirection);

        orders = orders.filter( order => matches(order, searchTerm , this.pipe));


        const total = orders.length;

        //paginate
        orders = orders.slice((page-1)*pageSize, (page - 1)* pageSize+pageSize);
        return of({orders, total});
    }






  getOrder(): Observable<Order[]> {
    return of([
      {"id": 242,"date": "2020-06-01","name": "Jennifer Smith","status": "pending","orderTotal": 18,"paymentMode": "cash"},
      {"id": 898,"date": "2020-06-02","name": "Jane Jones","status": "shipped","orderTotal": 283,"paymentMode": "paypal"},
      {"id": 283,"date": "2020-06-03","name": "Martha Clark","status": "delivered","orderTotal": 493,"paymentMode": "card"},
      {"id": 657,"date": "2020-06-04","name": "Wes Bean","status": "pending","orderTotal": 32,"paymentMode": "apple pay"},
      {"id": 209,"date": "2020-06-05","name": "James Long","status": "shipped","orderTotal": 34,"paymentMode": "google pay"},
      {"id": 178,"date": "2020-06-06","name": "Arthur Black","status": "delivered","orderTotal": 67,"paymentMode": "store credit"},
      {"id": 934,"date": "2020-06-07","name": "Paul White","status": "pending","orderTotal": 34,"paymentMode": "cash"},
      {"id": 298,"date": "2020-06-08","name": "Alexander Pole","status": "shipped","orderTotal": 209,"paymentMode": "paypal"},
      {"id": 382,"date": "2020-06-09","name": "Florence Machine","status": "delivered","orderTotal": 237,"paymentMode": "card"},
      {"id": 986,"date": "2020-06-10","name": "Multi Love","status": "pending","orderTotal": 1067,"paymentMode": "apple pay"},
      {"id": 493,"date": "2020-06-11","name": "Disco Lace","status": "shipped","orderTotal": 853,"paymentMode": "google pay"},
      {"id": 902,"date": "2020-06-12","name": "Linda Paul","status": "delivered","orderTotal": 21,"paymentMode": "store credit"},
      {"id": 201,"date": "2020-06-13","name": "Caramel Brown","status": "pending","orderTotal": 56,"paymentMode": "cash"},
      {"id": 893,"date": "2020-06-14","name": "Candy Sweet","status": "shipped","orderTotal": 90,"paymentMode": "paypal"},
      {"id": 398,"date": "2020-06-15","name": "Phillis Way","status": "delivered","orderTotal": 87,"paymentMode": "card"},
      {"id": 467,"date": "2020-06-16","name": "Sandra Dark","status": "pending","orderTotal": 56,"paymentMode": "apple pay"},
      {"id": 674,"date": "2020-06-17","name": "Nicole Zamata","status": "shipped","orderTotal": 238,"paymentMode": "google pay"},
      {"id": 902,"date": "2020-06-18","name": "Sasheer Byer","status": "delivered","orderTotal": 384,"paymentMode": "store credit"},
      {"id": 984,"date": "2020-06-19","name": "Paula Patel","status": "shipped","orderTotal": 892,"paymentMode": "cash"},
      {"id": 284,"date": "2020-06-20","name": "Carla Sanchex","status": "pending","orderTotal": 382,"paymentMode": "card"}
  ]);
  }
}

