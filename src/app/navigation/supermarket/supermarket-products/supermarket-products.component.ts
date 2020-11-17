import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from '../../../_services/cart.service';
import { TokenStackService } from '../../../_services/token-stack.service';

@Component({
  selector: 'app-supermarket-products',
  templateUrl: './supermarket-products.component.html',
  styleUrls: ['./supermarket-products.component.scss']
})
export class SupermarketProductsComponent implements OnInit, OnDestroy {
  @Input() page:number;
  @Input() active:number;
  @Input() allProducts$:any[];
  @Input() groceryProducts$:any[];
  @Input() vegetableProducts$:any[];
  @Input() cannedGoodsProducts$:any[];
  userId: string;

  constructor(private cartService: CartService,
              private toastService: NotificationsService,
              private router: Router,
              private tokenService: TokenStackService,
              @Inject(PLATFORM_ID) private platformId:string) { }

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
