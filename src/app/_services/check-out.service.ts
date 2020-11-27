import { Inject, Injectable, OnDestroy, PLATFORM_ID, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class CheckOutService {
    baseUrl: string;
  

    constructor(private http: HttpClient,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId,
              @Inject('BASE_URL') baseUrl: string){
                  this.baseUrl = baseUrl + '/api/v1/en-PH/order';
    }


    checkOutApi(id, data): Observable<any> {
        return this.http.post(`${this.baseUrl}/${id}`, data);
    }

    getOrderById(id): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }

    getOrderItem(orderId: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/id/${orderId}`);
    }

    
    




}
