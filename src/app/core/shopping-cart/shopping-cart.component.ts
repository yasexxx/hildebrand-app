import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../_services/cart.service';
import { TokenStackService } from '../../_services/token-stack.service';
import { CartModel } from './../../model/cart-item.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  addedCart = [];
  cartApiArray: any[];
  totalAmount = 0;
  apiCartObj = {
    cartId: '',
    product: '',
    price: 0,
    quantity: 0
  }

  constructor(private cartService: CartService,
              private router: Router,
              private tokenService: TokenStackService) {}

  ngOnInit(): void {
    let localCart = this.cartService.getCartLocal();
    if (localCart !== null){
      localCart = JSON.parse(localCart);
      this.addedCart = localCart;
    }
    this.totalAmount = this.cartService.getTotalAmount();
    const user = this.tokenService.getUser();
    if (!!user){
      const userId = user.id;
      this.getCartApi(userId);
    }
  }

  getCartApi(id) {
    this.cartService.getCart(id)
    .subscribe( (cart ) => {
      this.cartApiArray = cart[0].attributes.cart;
      console.log(this.cartApiArray);
      
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

  changeCartValue(event, name){
    this.addedCart.map( (item) => {
      if (item.name === name){
        item.quantity = event;
      }
    } );
    this.totalAmount = 0;
    this.cartService.saveCart(this.addedCart);
    this.totalAmount = this.cartService.getTotalAmount();
    this.cartService.initCart();
    
  }

  removeItem(name): void {
    this.cartService.deleteItem(name);
  }

}
