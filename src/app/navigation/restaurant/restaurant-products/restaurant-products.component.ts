import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-restaurant-products',
  templateUrl: './restaurant-products.component.html',
  styleUrls: ['./restaurant-products.component.scss']
})
export class RestaurantProductsComponent implements OnInit {

  @Input() productRestaurant1;
  @Input() productRestaurant2;
  @Input() productRestaurant3;
  @Input() page:number;
  @Input() active:number;


  constructor() {}
    
  ngOnInit(): void {
  }


}
