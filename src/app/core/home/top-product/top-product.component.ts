import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { CartService } from './../../../_services/cart.service';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  @Input() topProduct$: [];
  constructor(private cartService: CartService,
              private toastService: NotificationsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  convert2Base64(imageStr): string{
    return 'data:' + imageStr.imageFile.mimetype + ';base64,' + imageStr.imageFile.data.toString('base64');
  }

  addCart(product, qty= 1) {
    this.cartService.addToCart(product = product, qty = qty);
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


}
