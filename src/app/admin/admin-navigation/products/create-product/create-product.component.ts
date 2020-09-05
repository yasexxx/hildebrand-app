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
      { title: "available product",type:"text",  id: "available", order:3},
      { title: "description",type:"text",  id: "description", order:4},
      { title: "category", type:"text", id: "category", order:5},
      { title: "publish", type:"text", id: "publish", order:6},
      

    ];
  }

  ngOnInit(): void {

  }


  sortCreateTitle(title: any[]) {
    const ascendOrder = title.sort( (a, b) => a.order - b.order ? 1: -1);
    return ascendOrder;
  }









}
