import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { debounceTime } from 'rxjs/operators';
import { NavService } from './../shared/nav.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class CartService {
  baseUrl: string;
  count = 0;
  cartStorage = [];


  private CART_KEY = 'cart-local';

  constructor(private http: HttpClient,
              private navService: NavService,
              @Inject(PLATFORM_ID) private platformId,
              @Inject('BASE_URL') baseUrl: string){
                  this.baseUrl = baseUrl + '/api/v1/en-PH/user/cart';
                }

  addToCart(product, qty:number): Observable<any> {
      const cartObj = {
        name: '',
        price: 0,
        quantity: 0,
        img: ''
      };
      this.count += qty;
      cartObj.name = product.productName;
      cartObj.price = product.price;
      cartObj.quantity = qty;
      cartObj.img = product.imageFile;
      this.cartStorage.push(cartObj);
      this.navService.changeCart(this.count);
      this.saveCart(this.cartStorage);
    return this.http.post(this.baseUrl, this.cartStorage)
    .pipe(
      debounceTime(1400)
    );
    }


  getCart(id): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCartLocal(): any {
    if (isPlatformBrowser(this.platformId)){
     return window.localStorage.getItem(this.CART_KEY);
    }
  }

  saveCart(cartDetail): void {
    const cartString = JSON.stringify(cartDetail);
    if (isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.CART_KEY);
      window.localStorage.setItem(this.CART_KEY, cartString);
    }
  }

  clearCartLoc(): void {
    if (isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.CART_KEY);
    }
  }

  initCart():void {
    let count = 0;
    const cartArr = this.getCartLocal();
    if (!!cartArr && (cartArr.length !== this.count)) {
      this.cartStorage = JSON.parse(cartArr);
      this.cartStorage.forEach(
        (product) => {
          count += product.quantity;
        }
      );
    if (this.count !== count ){
      this.count = count;
    }
    this.navService.changeCart(this.count);
    // console.log(this.cartStorage);
    // this.saveCart(this.cartStorage);
    }
    else {
      this.navService.changeCart(0);
        
    }
  }



}
