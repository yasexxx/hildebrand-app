import { Inject, Injectable, OnDestroy, PLATFORM_ID, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
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

  private CART_KEY = 'lccp';

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
      img: ''
    };
    this.count += qty;
    cartObj.name = product.productName;
    cartObj.price = product.price;
    cartObj.quantity = qty;
    cartObj.img = product.imageFile;
    this.navService.changeCart(this.count);

    // push only if cart is 0
    if (this.cartStorage.length === 0 ){
      this.cartStorage.push(cartObj);
      isAdded = true;
    }

    // search for name exists
    this.cartStorage.map( item => {
    if (item.name === product.productName){
      if (!isAdded) {
      item.quantity += qty;
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
      ?.subscribe( data => {
        data
      },
      err => {
        console.log(err);

      });
    } catch (error) {
      console.log(error);
    }
    }


  getCart(id:string): Observable<any[]> {
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

  clearCartLoc(): void {
    if (isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.CART_KEY);
      this.cartStorage = [];
      this.count = 0;
    }
  }

  deleteItem(name): void {
    const removeIndex = this.cartStorage.map( (item) => {
      return item.name;
    }).indexOf(name);
    this.initCart();
    this.cartStorage.splice(removeIndex, 1);
    this.saveCart(this.cartStorage);
    this.router.navigateByUrl('/home', { skipLocationChange: true}).then( () =>
      this.router.navigate(['/cart']));
    this.initCart();
  }

  deleteItemApi(id, name, itemId): Observable<any> {
    const itemDelete = { name: name, itemId: itemId};
    return this.http.post(`${this.baseUrl}/item/${id}`,itemDelete);
  }

  deleteAllApi(id:string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/remove/${id}`)
  }


  initCart(): void {
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
        if (li.quantity === 0){
          totalAmount = 0;
        } else {
          totalAmount += (price * quanity);
        }
      });
    }
    return totalAmount;
  }

  updateItemQuantity(id ,qty, name): Observable<any> {
    const data = {quantity: qty, name: name};
    return this.http.post(`${this.baseUrl}/change/${id}`, data)
  }

  ngOnDestroy(): void {
    if (this.subscription1$){ this.subscription1$.unsubscribe();}
  }



}
