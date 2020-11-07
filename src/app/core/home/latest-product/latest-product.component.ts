import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.scss']
})
export class LatestProductComponent implements OnInit {
  @Input() latestProduct$: [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

  addCart(product, qty= 1) {
    this.cartService.addToCart(product = product, qty = qty);
  }

}
