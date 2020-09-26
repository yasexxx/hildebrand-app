import { ProductServiceOperation } from './../../_services/product.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  page = 1;
  active = 1;
  isLoaded$:boolean = false;

  allRestaurantProducts: any[];
  dessertProducts: any[];
  foodProducts: any[];
  drinkProducts: any[];

  subscription$ : Subscription;
  subscription2$ : Subscription;
  subscription3$ : Subscription;
  subscription4$ : Subscription;


  constructor(private productServices: ProductServiceOperation) {}


  ngOnInit(): void {
    this.subscription$ = this.productServices.getRestaurantProduct()
    .subscribe(
      data =>{
        const newData = this.filterData(data);
        this.allRestaurantProducts = newData;
      },
      err => {
        console.log(err);
      }
    );
    this.subscription2$ = this.productServices.getRestaurantFood()
    .subscribe(
      data => {
        const newData = this.filterData(data);
        this.foodProducts = newData;
        
      }
    );
    this.subscription3$ = this.productServices.getRestaurantDrink()
    .subscribe(
      data => {
        const newData = this.filterData(data);
        this.drinkProducts = newData;
      },
      err => { 
        console.log(err);
      }
    );

    this.subscription4$ = this.productServices.getRestaurantDessert()
    .subscribe(
      data => {
        const newData = this.filterData(data);
        this.dessertProducts = newData;
      },
      err => { 
        console.log(err);
      }
    );
  }

  filterData(data){
    const newData = data.filter( li => li.isPublished === true  );
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
