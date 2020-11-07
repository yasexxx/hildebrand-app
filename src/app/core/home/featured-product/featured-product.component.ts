import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.scss']
})
export class FeaturedProductComponent implements OnInit {

  @Input() featuredProduct$: [];

  constructor(private cartService: CartService) {
  }


  ngOnInit(): void {
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

  addCart(product, qty= 1) {
    this.cartService.addToCart(product = product, qty = qty);
  }

}
