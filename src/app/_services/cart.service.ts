import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { NavService } from './../shared/nav.service';

@Injectable({
    providedIn: 'root'
})
export class CartService {
  baseUrl: string;
  count = 0;
  constructor(private http: HttpClient,
              private navService: NavService,
              @Inject('BASE_URL') baseUrl: string){
                  this.baseUrl = baseUrl + '/api/v1/en-PH/user/cart';
                }

  addToCart(product, qty): void {
      console.log(product);
      this.count += qty;
      console.log(this.count);
      this.navService.changeCart(this.count);

      // return this.http.post(this.baseUrl, cartData)
      // .pipe(
      //   debounceTime(600)
      // );
    }

    getCart(id): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }


}
