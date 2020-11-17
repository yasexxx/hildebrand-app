import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../../../_services/cart.service';
import { TokenStackService } from '../../../_services/token-stack.service';

@Component({
  selector: 'app-restaurant-products',
  templateUrl: './restaurant-products.component.html',
  styleUrls: ['./restaurant-products.component.scss']
})
export class RestaurantProductsComponent implements OnInit, OnDestroy {

  @Input() allProducts$;
  @Input() foodProducts$;
  @Input() drinkProducts$;
  @Input() dessertProducts$;
  @Input() page:number;
  @Input() active:number;
  userId: string;

  constructor(private cartService: CartService,
              private toastService: NotificationsService,
              private router: Router,
              private tokenService: TokenStackService,
              @Inject(PLATFORM_ID) private platformId:string) { 
  }

  ngOnInit(): void {
    const user = this.tokenService.getUser();
    if (!!user){
      this.userId = user.id;
    }
  }

  ngOnDestroy(): void {
    this.cartService.ngOnDestroy();
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

  addCart(product, qty= 1, id=0) {
    this.cartService.addToCart(product = product, qty = qty, id);
    this.popToast(true, qty, product);
  };

  popToast(isTrue: boolean, quantity: number, product) {
    if (isTrue) {
      this.toastService.success(
        `${quantity} Added`,
        `${product.productName}...`
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  popToastInvalid(header: string, subject: string) {
    this.toastService.info(header, subject, {
      timeOut: 3000
    });
  }

  productView(id) {
    this.router.navigate(['/product/id', id]);
    if(isPlatformBrowser(this.platformId)){
      window.scrollTo(0, 0);
    }
  }

}
