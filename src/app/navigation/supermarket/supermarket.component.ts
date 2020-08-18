import { ProductLocalService } from './../../services/product-local.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss']
})
export class SupermarketComponent implements OnInit {

  page = 1;
  active = 1;

  productSupermarket1:{}[];
  productSupermarket2:{}[];
  productSupermarket3:{}[];

  constructor(private productService: ProductLocalService) { }

  ngOnInit(): void {

  const superMarketProd = this.productService.superMarketDisplay();
  this.productSupermarket1 = this.productService.pSupermarket1;
  this.productSupermarket2 = this.productService.pSupermarket2;
  this.productSupermarket3 = this.productService.pSupermarket3;

  }


}
