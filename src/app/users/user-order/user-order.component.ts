import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CheckOutService } from '../../_services/check-out.service';
import { ShoppingCartComponent } from './../../core/shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss'],
  providers: [
    ShoppingCartComponent
  ]
})
export class UserOrderComponent implements OnInit ,OnDestroy{

  userId: string;
  subscription$: Subscription;
  orderArray = [];
  currencyUsed = 'USD';
  
  constructor(private checkOutService: CheckOutService,
              private router: Router,
              private shoppinCartComponent: ShoppingCartComponent) { }

  ngOnInit(): void {
    this.shoppinCartComponent.ngOnInit();
    this.userId = this.shoppinCartComponent.userId;
    if (!!this.userId) {
      this.subscription$ = this.checkOutService.getOrderById(this.userId)
        .subscribe( res => {
          this.orderArray = res;
        })
    }
    
  }

  ngOnDestroy(): void {
    this.shoppinCartComponent.ngOnDestroy();
    if(this.subscription$) { this.subscription$.unsubscribe(); }
  }

  orderView(orderNumber) {
    this.router.navigate(['/user/order', orderNumber]);
  }


}
