import { Subscription } from 'rxjs';
import { ProductServiceOperation } from './../../_services/product.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss']
})
export class SupermarketComponent implements OnInit {

  page = 1;
  active = 1;
  allProducts
  groceryProducts:{}[];
  vegetableProducts:{}[];
  cannedGoodsProducts:{}[];
  subscription$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  subscription4$: Subscription;

  constructor(private productService: ProductServiceOperation) { }

  ngOnInit(): void {
    this.subscription$ = this.productService.getSupermarketProduct()
    .subscribe(
      data =>{
        const newData = this.filterData(data);
        this.allProducts = newData;
      },
      err => {
        err;
      }
    );
    this.subscription2$ = this.productService.getSupermarketGrocery()
    .subscribe(
      data => {
        const newData = this.filterData(data);
        this.groceryProducts = newData;
        
      }
    );
    this.subscription3$ = this.productService.getSupermarketVegetable()
    .subscribe(
      data => {
        const newData = this.filterData(data);
        this.vegetableProducts = newData;
      },
      err => { 
        err;
      }
    );

    this.subscription4$ = this.productService.getSupermarketCannedGoods()
    .subscribe(
      data => {
        const newData = this.filterData(data);
        this.cannedGoodsProducts = newData;
      },
      err => { 
        err;
      }
    );
  }

  filterData(data){
    const newData = data
    // .filter( li => li.isPublished === true  );
    const length = newData.length;
    const rem = length % 4;
    newData.splice(length-rem, length);
    return newData;
  }

  ngOnDestroy(): void {
    if(this.subscription$){ this.subscription$.unsubscribe();}
    if(this.subscription2$){ this.subscription2$.unsubscribe();}
    if(this.subscription3$){ this.subscription3$.unsubscribe();}
    if(this.subscription4$){ this.subscription4$.unsubscribe();}
  }


}
