import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../../_services/cart.service';
import { TokenStackService } from '../../_services/token-stack.service';
import { CartModel } from './../../model/cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  addedCart = [];
  cartApiArray: any[];
  mixedCart = [];
  totalAmount = 0;
  apiCartObj = {
    cartId: '',
    product: '',
    price: 0,
    quantity: 0
  };
  userId = false;
  subscription$: Subscription;

  constructor(private cartService: CartService,
              private router: Router,
              private tokenService: TokenStackService) {

              }

  ngOnInit(): void {
    if (!(!!this.userId)){
      let localCart = this.cartService.getCartLocal();
      if (localCart !== null){
        localCart = JSON.parse(localCart);
        this.addedCart = localCart;
      }
      this.totalAmount = this.cartService.getTotalAmount();
    }
    const user = this.tokenService.getUser();
    if (!!user){
      this.userId = user.id;
      this.getCartApi(this.userId);
    }
  }

  ngOnDestroy(): void {
    this.cartService.ngOnDestroy();
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    }
  }

  getCartApi(id) {
    this.subscription$ = this.cartService.getCart(id)
    .subscribe( (cart ) => {
      this.cartApiArray = cart[0].attributes.cartArr;
      this.addedCart = [...this.cartApiArray];
      this.initCartApi();
    },
    err => {
      console.log(err);
    });
  }

  // getTotalAmount(): void {
  //   let price, quanity = 0;
  //   if (this.addedCart.length > 0){
  //     this.addedCart.map( (li) => {
  //       price = li.price;
  //       quanity = li.quantity;
  //       this.totalAmount += (price * quanity);
  //     });
  //   }
  // }

  convert2Base64(imageStr): string{
    return 'data:' + imageStr.mimetype + ';base64,' + imageStr.data.toString('base64');
  }

  changeCartValue(event, name): void{
    if (!(!!this.userId)){
    let isEmpty = false;
    this.addedCart.map( (item) => {
    if (item.name === name){
        item.quantity = event;
      }
    } );
    if (event === 0 ){
      isEmpty = true;
    }
    this.initCartApi();
    if (this.totalAmount === 0 || isEmpty){
      this.removeItem(name);
      isEmpty = false;
    }
    this.cartService.initCart();
  }
  }

  initCartApi() {
    if (!(!!this.userId)){
      this.totalAmount = 0;
      this.cartService.saveCart(this.addedCart);
      this.cartService.initCart();
      this.totalAmount = this.cartService.getTotalAmount();
    } else {
      this.cartService.saveCart(this.addedCart);
      this.cartService.updateCartInApi(this.userId, this.addedCart);
      this.cartService.initCart();
    }
  }


  removeItem(name): void {
    this.cartService.deleteItem(name);
  }



}
