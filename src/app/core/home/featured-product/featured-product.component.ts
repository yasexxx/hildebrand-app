import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, OnDestroy, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { LoaderService } from '../../../_services/loader.service';
import { TokenStackService } from '../../../_services/token-stack.service';
import { CartService } from './../../../_services/cart.service';
@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit, OnDestroy {
  userId :string;
  @Input() featuredProduct$: [];

  constructor(private cartService: CartService,
              private toastService: NotificationsService,
              private router: Router,
              private tokenService: TokenStackService,
              @Inject(PLATFORM_ID) private platformId: string,
              private loadService: LoaderService) {
  }


  ngOnInit(): void {
    this.loadService.show();
    const user = this.tokenService.getUser();
    if (!!user){
      this.userId = user.id;
    }
  };

  ngOnDestroy(): void {
    this.cartService.ngOnDestroy();
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  };

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

  singleProduct(id:string) {
    if (isPlatformBrowser(this.platformId)){
      this.router.navigate(['/product/id', id]);
    }
  }

  trackerImg(index, item){
    return item.productName;
  }



}
