import { ProductLocalService } from './../../../../services/product-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  dummyPickFeature:any;

  isCreate:boolean;

  constructor(private productsService: ProductLocalService) {
  }

  ngOnInit(): void {
  this.isCreate = true;
  }



}
