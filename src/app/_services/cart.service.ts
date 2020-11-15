import { Inject, Injectable, OnDestroy, PLATFORM_ID, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { debounceTime, map } from 'rxjs/operators';
import { NavService } from './../shared/nav.service';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { CartModel } from './../model/cart-item.model';

@Injectable({
    providedIn: 'root'
})
export class CartService implements OnDestroy {
  baseUrl: string;
  count = 0;
  cartStorage = [];
  totalAmount = 0;
  subscription1$: Subscription;

  private CART_KEY = 'cart-local';

  constructor(private http: HttpClient,
              private router: Router,
              private navService: NavService,
              @Inject(PLATFORM_ID) private platformId,
              @Inject('BASE_URL') baseUrl: string){
                  this.baseUrl = baseUrl + '/api/v1/en-PH/user/cart';
                }

  addToCart(product, qty:number ,id) {
    let isAdded = false;
    const cartObj = {
      name: '',
      price: 0,
      quantity: 0,
      img: '',

    };
<<<<<<< Updated upstream
    this.count += qty;
=======
    if (this.count === 0) {
      const cartArr = this.getCartLocal();
      this.cartStorage = JSON.parse(cartArr);
      if (!!this.cartStorage){
        this.cartStorage.forEach(
          // tslint:disable-next-line: no-shadowed-variable
          (products) => {
            this.count += products.quantity;
          }
        );
      }
    }
    this.count += qty;
    console.log(product.productName);
>>>>>>> Stashed changes
    cartObj.name = product.productName;
    cartObj.price = product.price;
    cartObj.quantity = qty;
    cartObj.img = product.imageFile;
    this.navService.changeCart(this.count);
<<<<<<< Updated upstream

    // push only if cart is 0
    if (this.cartStorage.length === 0 ){
      this.cartStorage.push(cartObj);
      isAdded = true;
=======
    this.saveCart(this.cartStorage);
      // return this.http.post(this.baseUrl, cartData)
      // .pipe(
      //   debounceTime(600)
      // );
>>>>>>> Stashed changes
    }

    // search for name exists
    this.cartStorage.map( item => {
    if (item.name === product.productName){
      if (!isAdded) {
      item.quantity +=qty;
      isAdded = true;
      }
    }
    });

    
    if (!isAdded) {
      this.cartStorage.push(cartObj);
      isAdded = true;
    }

    try {
      this.saveCart(this.cartStorage);
      this.subscription1$ = this.updateCartInApi(id, this.cartStorage)
      .subscribe( data => {
          console.log(data);
      },
      err => {
        console.log(err);
        
      });
    } catch (error) {
      console.log(error);
      
      
    }
    }


  getCart(id:string): Observable<CartModel[]> {
      return this.http.get<CartModel[]>(`${this.baseUrl}/${id}`);
  }


  updateCartInApi(userId, cartData): Observable<any> {
    if (userId !== 0){
      return this.http.put(`${this.baseUrl}/${userId}`, cartData);
    }

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

  initCart(){
    const cartArr = this.getCartLocal();
    this.cartStorage = JSON.parse(cartArr);
    if (!!this.cartStorage){
      console.log('go');
      this.cartStorage.forEach(
        // tslint:disable-next-line: no-shadowed-variable
        (product) => {
          this.count += product.quantity;
        }
      );
      return this.count;
    }
    return;
  }



  clearCartLoc(): void {
    if (isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.CART_KEY);
      this.cartStorage = [];
      this.count = 0;
    }
  }

  deleteItem(name) {
    const removeIndex = this.cartStorage.map( (item) => {
      return item.name;
    }).indexOf(name);
    this.cartStorage.splice(removeIndex, 1);
    this.saveCart(this.cartStorage);
    this.router.navigateByUrl('/admin', { skipLocationChange: true}).then( () =>
      this.router.navigate(['/cart']));
    this.initCart();
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

  getTotalAmount(): number {
    let totalAmount = 0;
    let price, quanity = 0;
    if (this.cartStorage.length > 0){
      this.cartStorage.map( (li) => {
        price = li.price;
        quanity = li.quantity;
        totalAmount += (price * quanity);
      });
    }
    return totalAmount;
  }

  ngOnDestroy(): void {
    if (this.subscription1$){ this.subscription1$.unsubscribe();}
  }



}
