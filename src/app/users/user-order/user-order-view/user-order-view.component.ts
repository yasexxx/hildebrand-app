import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CheckOutService } from '../../../_services/check-out.service';
import { TokenStackService } from '../../../_services/token-stack.service';

@Component({
  selector: 'app-user-order-view',
  templateUrl: './user-order-view.component.html',
  styleUrls: ['./user-order-view.component.scss']
})
export class UserOrderViewComponent implements OnInit, OnDestroy {
  subscription1$: Subscription;
  validItem = true;
  currencyUsed = 'USD'
  orderItems: any[];
  orderArray: any[];
  isUser = false;


  constructor(private route: ActivatedRoute,
              private tokenService: TokenStackService,
              private checkOutService: CheckOutService) { }

  ngOnInit(): void {
    const user = this.tokenService.getUser();
    if (!!user) {
      const paramId = this.route.snapshot.paramMap.get('id')
      this.queryItemOnApi(paramId);
    } else {
      this.isUser = false;
    }
  }

  ngOnDestroy(): void {
    if(this.subscription1$) { this.subscription1$.unsubscribe(); }
  }

  queryItemOnApi(id) {
    this.subscription1$ = this.checkOutService.getOrderItem(id)
      .subscribe( res => {
        const len = res.length;
        if (len === 0) {
          this.validItem = false;
        } else {
          this.orderArray = res;
          this.orderItems = res[0].orderItems;
          this.validItem = true;
          
        }
      }, err => {
        this.validItem = false;
        
      })
  }

  paymentName(obj) {
    if (obj === 'cod'){
      return 'Cash On Delivery';
    } else if (obj === 'paypal') {
      return 'Paypal';
    } else {
      return 'None'
    }
  }

}
