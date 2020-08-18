import { ProductLocalService } from './../../services/product-local.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  page = 1;
  active = 1;
  isLoaded$:boolean = false;
  productRestaurant1:any[];
  productRestaurant2:{}[];
  productRestaurant3:{}[];


  constructor(private productService : ProductLocalService) { }

  imgLoadCheck(){
    const logss = document.querySelectorAll('.card');
    console.log(logss);

  }

  ngOnInit(): void {
    const initProductRestaurant = this.productService.restaurantDisplay();
    this.productRestaurant1 = this.productService.pRestaurant1;
    this.productRestaurant2 = this.productService.pRestaurant2;
    this.productRestaurant3 = this.productService.pRestaurant3;
  }




}
