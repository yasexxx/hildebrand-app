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

  formatForCreate : {}[] ;

  uploadTitle;


  constructor(private productsService: ProductLocalService) {

    this.isCreate = true;
    this.formatForCreate = [
      { title: "name", type:"text", id: "nameOf", order:1},
      { title: "price", type:"number", id: "priceOf", order:2},
      { title: "type",type:"text",  id: "typeOf", order:3},
      { title: "card",type:"text",  id: "hello", order:4},
    ];
  }

  ngOnInit(): void {

  }


  sortCreateTitle(title: any[]) {
    const arrange = title.sort( (a, b) => a.order - b.order ? 1: -1);
    return arrange;
  }









}
