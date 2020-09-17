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


  ngOnInit(): void {
    this.productRestaurant1 = this.productService.getRestaurantAll();
    this.productRestaurant2 = this.productService.getRestaurantFoods();
    this.productRestaurant3 = this.productService.getRestaurantDesserts();
  }




}
