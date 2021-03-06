import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { MonthlySales } from './monthly-sales';

@Injectable({
  providedIn: 'any'
})

export class SalesService {
  private salesUrl = '/hildebrand-app/assets/json/sales.json';

  constructor(private http: HttpClient) {
  }

  getSalesByMonth(): Observable<MonthlySales[]>{
    const monthlySales$ = this.http.get<MonthlySales[]>(this.salesUrl).pipe(catchError(this.handleError));
    return monthlySales$;
  }

  private handleError(err: HttpErrorResponse){
    return throwError(`An error occurred: ${err}`);
  }

  
}

