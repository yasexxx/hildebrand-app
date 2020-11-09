import { Component, OnInit } from '@angular/core';
import { CartService } from '../../_services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  addedCart = [];
  totalAmount: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    let localCart = this.cartService.getCartLocal();
    if (localCart !== null){
      localCart = JSON.parse(localCart);
      this.addedCart = localCart;
    }
    this.getTotalAmount();
  }

  getTotalAmount(): void {
    let price, quanity = 0;
    if (this.addedCart.length > 0){
      this.addedCart.map( (li) => {
        price = li.price;
        quanity = li.quantity;
        this.totalAmount += (price * quanity);
      });
    }
  }

  convert2Base64(imageStr): string{
    return 'data:' + imageStr.mimetype + ';base64,' + imageStr.data.toString('base64');
  }

  changeCartValue(event, name){
    console.log(event, name);
    
  }

}
