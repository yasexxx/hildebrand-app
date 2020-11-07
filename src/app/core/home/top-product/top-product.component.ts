import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  @Input() topProduct$: [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  convert2Base64(imageStr): string{
    return 'data:' + imageStr.imageFile.mimetype + ';base64,' + imageStr.imageFile.data.toString('base64');
  }

  addCart(product, qty= 1) {
    this.cartService.addToCart(product = product, qty = qty);
  }

}
