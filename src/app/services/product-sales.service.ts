import { Injectable, PipeTransform } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject, of } from 'rxjs';
import { catchError, tap, debounceTime, switchMap, delay } from 'rxjs/operators';


import { MonthlySales } from './monthly-sales'
import { SortColumnForSales, SortDirection } from '../directives/sortable.directives';
import { DecimalPipe } from '@angular/common';



interface SearchResultForSales {
  sales: MonthlySales[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumnForSales;
  sortDirection: SortDirection;
}

const compare = ( v1: string |number, v2: string | number) => (
  v1 < v2 ? -1 : v1 > v2 ? 1 : 0 )

export function sort(sales: MonthlySales[], column: SortColumnForSales, direction: string){
  if (direction === '' || column === '') {
      return sales;
  } else {
      return [...sales].sort((a,b) => {
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
      });
  }
}

function matches (sales: MonthlySales, term: string, pipe: PipeTransform){
  return sales.month.toLowerCase().includes(term.toLowerCase())
  || pipe.transform(sales.revenue).includes(term)
  || pipe.transform(sales.id).includes(term);
}


@Injectable({
  providedIn: 'any'
})

export class SalesService {
  private salesUrl = '/hildebrand-app/assets/json/sales.json';

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _sales$ = new BehaviorSubject<MonthlySales[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _containerArray: MonthlySales[] = [];


  private _state : State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''

  }

  constructor(private http: HttpClient,
              private pipe: DecimalPipe ) {

    this.getSalesData(); //get data of sales

    console.log(this._containerArray);
    
    this._search$.pipe(
    tap(()=> this._loading$.next(true)),
    debounceTime(200),
    switchMap(()=> this._search()),
    delay(200),
    tap(()=> this._loading$.next(false)))
    .subscribe( result => {
      this._sales$.next(result.sales);
      this._total$.next(result.total);
                  } );
    this._search$.next();
  }

    get sales$() {return this._sales$.asObservable();}

    get total$() { return this._total$.asObservable();}

    get loading$() { return this._loading$.asObservable();}

    get page() {return this._state.page; }

    get pageSize() { return this._state.pageSize; }

    get searchTerm() {
        return this._state.searchTerm; }

    set page(page: number) { this._set({page});}

    set pageSize(pageSize: number) { this._set({pageSize});}

    set searchTerm(searchTerm: string) { this._set({searchTerm});}

    set sortColumn(sortColumn: SortColumnForSales) {this._set({sortColumn});}

    set sortDirection(sortDirection: SortDirection) { this._set({sortDirection});}

    private _set(patch: Partial<State>) {
        Object.assign(this._state, patch);
        this._search$.next();
    }

    private _search(): Observable<SearchResultForSales> {
        const { sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;


    let sales = sort(this._containerArray, sortColumn, sortDirection);

    sales = sales.filter( product => matches(product, searchTerm, this.pipe));


    const total = sales.length;

        //paginate
        sales = sales.slice((page-1)*pageSize, (page - 1)* pageSize+pageSize);
    return of({sales, total});
    }


  // for other operation
  //------------------------------->>>

  getSalesData() {
    this.getSalesByMonth().subscribe( sales  => 
        sales.forEach( (salesArray,i) => { salesArray.id= i+1;
          this._containerArray.push(salesArray);
        }),
        err => console.log("Error! something wrong: ", err)
    );
  }

  getSalesByMonth(): Observable<MonthlySales[]>{
    const monthlySales$ = this.http.get<MonthlySales[]>(this.salesUrl).pipe(catchError(this.handleError));
    return monthlySales$;
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}

