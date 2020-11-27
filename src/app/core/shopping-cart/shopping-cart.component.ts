import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, Subscription } from 'rxjs';
import { NavService } from '../../shared/nav.service';
import { CartService } from '../../_services/cart.service';
import { TokenStackService } from '../../_services/token-stack.service';

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
  userId: string;
  subscription$: Subscription;
  subscriptionDelAPi$: Subscription;
  subscriptionUpdateApi$: Subscription;

  quantityObs: Observable<number>;

  constructor(private cartService: CartService,
              private router: Router,
              private navService: NavService,
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
    if (this.subscription$) { this.subscription$.unsubscribe(); }
    if (this.subscriptionDelAPi$) { this.subscriptionDelAPi$.unsubscribe();}
    if (this.subscriptionUpdateApi$) { this.subscriptionUpdateApi$.unsubscribe();}
  }

  getCartApi(id) {
    this.subscription$ = this.cartService.getCart(id)
    .subscribe( (cart ) => {
      if (!!(cart[0]?.attributes)){
        this.cartApiArray = cart[0].attributes.cartArr;
        this.addedCart = [...this.cartApiArray];
      }
      this.initCartApi();
    },
    err => {
      console.log(err);
      this.initCartApi();
    });
  }

  convert2Base64(imageStr): string{
    return 'data:' + imageStr.mimetype + ';base64,' + imageStr.data.toString('base64');
  }

  changeCartValue(event:number, name): void{
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
  } else {
    let isEmpty = false;
    if (event === 0 ){
      isEmpty = true;
    }
    if (this.totalAmount === 0 || isEmpty){
      this.removeItem(name);
      isEmpty = false;
    } else {
      this.subscriptionUpdateApi$ = this.cartService.updateItemQuantity(this.userId, event, name)
      .subscribe( res => {
        if (!!(res.attributes)){
          this.cartApiArray = res.attributes.cartArr;
          this.addedCart = [...this.cartApiArray];
        }
        this.initCartApi();
      }, err => {
        console.log(err);
        this.initCartApi();
      });
    }
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
      this.totalAmount = this.cartService.getTotalAmount();
    }
  }


  removeItem(name): void {
    if (!!this.userId){
      let itemID;
      this.cartApiArray.map( item => {
        if(item.name === name){
          itemID = item._id;
        }
      })
      this.subscriptionDelAPi$ = this.cartService.deleteItemApi(this.userId, name, itemID)
        .subscribe( res => {
          this.ngOnInit();
        }, err => {
          console.log(err);
        })
    } else {
      this.cartService.deleteItem(name);
    }
  }

  checkOut():void {
    this.router.navigate(['/check-out']);
  }



}
