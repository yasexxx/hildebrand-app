import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Order } from './order';

@Injectable({
  providedIn: 'any'
})

export class OnlineOrderService {
  private salesUrl = './../../assets/json/order.json';

  constructor(private http: HttpClient) {
  }

  getOrder(): Observable<Order[]>{
    const monthlySales$ = this.http.get<Order[]>(this.salesUrl).pipe(catchError(this.handleError));
    return monthlySales$;
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }
}

