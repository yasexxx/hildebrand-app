import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductLocalService {
  pSupermarket1:{}[];
  pSupermarket2:{}[];
  pSupermarket3:{}[];
  pHome1:{}[];
  pHome2:{}[];
  pHome3:{}[];
  pRestaurant1:{}[];
  pRestaurant2:{}[];
  pRestaurant3:{}[];
  newproduct:{}[];
  bg_images:{}[];


  constructor() { }

  homeProductDisplay(){
    this.pHome1 = [
      { id:1, name: 'Pork',insert:"home", type:"feature", price: {new:500, old:700}, url: './assets/images/featured/featured/feature-1.jpg' },
      { id:2, name:'Banana',insert:"home",type:"feature", price: {new: 1500, old: false}, url: './assets/images/featured/featured/feature-2.jpg' },
      { id:3, name:'Guava', insert:"home",type:"feature", price: {new:2500, old:2900}, url: './assets/images/featured/featured/feature-3.jpg' },
      { id:4, name:'Watermelon',insert:"home",type:"feature", price: {new:4500, old:false}, url: './assets/images/featured/featured/feature-4.jpg'}
    ];

    this.pHome2 = [
      { id:5, name: 'Grapes',insert:"home", type:"latest", price: {new:200, old:700}, url: './assets/images/featured/latest/latest-1.png' },
      { id:6, name:'Hamburger',insert:"home", type:"latest", price: {new: 100, old: false}, url: './assets/images/featured/latest/latest-2.png' },
      { id:7, name:'Mango',insert:"home", type:"latest", price: {new:70, old:80}, url: './assets/images/featured/latest/latest-3.png' },
      { id:8, name:'Apple',insert:"home", type:"latest", price: {new:40, old:false}, url: './assets/images/featured/latest/latest-4.png'}
    ];

    this.pHome3 = [
      { id:8, name: 'Fruits',insert:"home",type:"top", price: {new:100, old:700}, url: './assets/images/featured/top/product-1.png' },
      { id:9, name:'Apple',insert:"home",type:"top", price: {new: 50, old: false}, url: './assets/images/featured/top/product-4.png' },
      { id:10, name:'Milk',insert:"home",type:"top", price: {new:160, old:2900}, url: './assets/images/featured/top/product-3.png' },
      { id:11, name:'Juice',insert:"home",type:"top", price: {new:45, old:false}, url: './assets/images/featured/top/product-2.png' }
    ];

    this.newproduct = [{id: 1, name: 'Pepper' , url: 'assets/images/spices/product-1.jpg'},
					{id: 2, name: 'Strawberry' , url: 'assets/images/spices/product-2.jpg'},
					{id: 3, name: 'Chili' , url: 'assets/images/spices/product-3.jpg'},
					{id: 4, name: 'Cabbage' , url: 'assets/images/spices/product-4.jpg'},
					{id: 5, name: 'Tomato' , url: 'assets/images/spices/product-5.jpg'},
					{id: 6, name: 'Brocholli' , url: 'assets/images/spices/product-6.jpg'},
					{id: 7, name: 'Carrots' , url: 'assets/images/spices/product-7.jpg'},
					{id: 8, name: 'Juice' , url: 'assets/images/spices/product-8.jpg'},
					{id: 9, name: 'Onion' , url: 'assets/images/spices/product-9.jpg'},
					{id: 10, name: 'Apple' , url: 'assets/images/spices/product-10.jpg'},
					{id: 11, name: 'Garlic' , url: 'assets/images/spices/product-11.jpg'},
					{id: 12, name: 'Chili Pepper' , url: 'assets/images/spices/product-12.jpg'},
          ];

  this.bg_images =['assets/images/img1.jpg','assets/images/img2.jpg'
					,'assets/images/img3.jpg'];
  }

  superMarketDisplay(){

    this.pSupermarket1 = [{id: 1, price:40, name: 'Pepper' ,insert:"home",type:"all", url: 'assets/images/featured/feature-1.jpg'},
					{id: 2, price:40,name: 'Strawberry' , insert:"supermarket",type:"all",url: 'assets/images/featured/feature-2.jpg'},
					{id: 3, price:60,name: 'Chili' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-3.jpg'},
					{id: 4, price:70,name: 'Cabbage' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-4.jpg'},
					{id: 5, price:90,name: 'Tomato' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:100,name: 'Brocholli' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-6.jpg'},
					{id: 7,price:130, name: 'Carrots' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-7.jpg'},
					{id: 8, price:230,name: 'Juice' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-8.jpg'},
					{id: 9, price:130,name: 'Onion' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:200,name: 'Apple' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-2.jpg'},
					{id: 11, price:390,name: 'Garlic' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-3.jpg'},
					{id: 12, price:180,name: 'Chili Pepper' ,insert:"supermarket",type:"all", url: 'assets/images/featured/feature-4.jpg'},
          ];

  this.pSupermarket2 = [{id: 1, price:40, name: 'Pepper' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-6.jpg'},
					{id: 2, price:42, name: 'Strawberry' , insert:"supermarket",type:"vegetable",url: 'assets/images/featured/feature-8.jpg'},
					{id: 3, price:30, name: 'Chili' , insert:"supermarket",type:"vegetable",url: 'assets/images/featured/feature-7.jpg'},
					{id: 4,price:50, name: 'Cabbage' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-6.jpg'},
					{id: 5, price:50, name: 'Tomato' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:80, name: 'Brocholli' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-4.jpg'},
					{id: 7, price:80, name: 'Carrots' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-3.jpg'},
					{id: 8, price:80, name: 'Juice' , insert:"supermarket",type:"vegetable",url: 'assets/images/featured/feature-2.jpg'},
					{id: 9,price:80, name: 'Onion' , insert:"supermarket",type:"vegetable",url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:100, name: 'Apple' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-6.jpg'},
					{id: 11, price:130, name: 'Garlic' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-8.jpg'},
					{id: 12,price:230, name: 'Chili Pepper' ,insert:"supermarket",type:"vegetable", url: 'assets/images/featured/feature-2.jpg'},
          ];

  this.pSupermarket3 = [{id: 1, name: 'Pepper' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-4.jpg'},
					{id: 2, price:30, name: 'Strawberry' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-5.jpg'},
					{id: 3, price:20, name: 'Chili' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-6.jpg'},
					{id: 4, price:50, name: 'Cabbage' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-7.jpg'},
					{id: 5, price:60, name: 'Tomato' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-8.jpg'},
					{id: 6, price:70, name: 'Brocholli' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-1.jpg'},
					{id: 7, price:80, name: 'Carrots' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-2.jpg'},
					{id: 8, price:90, name: 'Juice' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-3.jpg'},
					{id: 9, price:100, name: 'Onion' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-4.jpg'},
					{id: 10, price:120, name: 'Apple' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-5.jpg'},
					{id: 11, price:130, name: 'Garlic' , insert:"supermarket",type:"fruits",url: 'assets/images/featured/feature-4.jpg'},
					{id: 12, price:90, name: 'Chili Pepper' ,insert:"supermarket",type:"fruits", url: 'assets/images/featured/feature-8.jpg'},
          ];

  }

  restaurantDisplay(){

  this.pRestaurant1 = [
          {id: 1, price:40, name: 'Pepper' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/204'},
					{id: 2, price:50, name: 'Strawberry' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/200'},
					{id: 3, price:60, name: 'Chili' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/201'},
					{id: 4, price:70, name: 'Cabbage' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-4.jpg'},
					{id: 5, price:80, name: 'Tomato' ,insert:"restaurant",type:"all",url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:90, name: 'Brocholli' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/202'},
					{id: 7, price:100, name: 'Carrots' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-7.jpg'},
					{id: 8, price:410, name: 'Juice' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/203'},
					{id: 9, price:420, name: 'Onion' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:140, name: 'Apple' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/205'},
					{id: 11, price:430, name: 'Garlic' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-3.jpg'},
					{id: 12, price:440, name: 'Chili Pepper' ,insert:"restaurant",type:"all", url: 'https://picsum.photos/206'},
          ];

  this.pRestaurant2 = [{id: 1, name: 'Pepper' ,insert:"restaurant",type:"food", url: 'assets/images/featured/feature-6.jpg'},
					{id: 2, price:40, name: 'Strawberry' ,insert:"restaurant",type:"food", url: 'assets/images/featured/feature-8.jpg'},
					{id: 3, price:20, name: 'Chili' ,insert:"restaurant",type:"food", url: 'assets/images/featured/feature-7.jpg'},
					{id: 4, price:10, name: 'Cabbage' ,insert:"restaurant",type:"food", url: 'assets/images/featured/feature-6.jpg'},
					{id: 5, price:40, name: 'Tomato' ,insert:"restaurant",type:"food", url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:50, name: 'Brocholli' ,insert:"restaurant",type:"food", url: 'assets/images/featured/feature-4.jpg'},
					{id: 7, price:50, name: 'Carrots' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-3.jpg'},
					{id: 8, price:90, name: 'Juice' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-2.jpg'},
					{id: 9, price:100, name: 'Onion' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:140, name: 'Apple' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-6.jpg'},
					{id: 11, price:100, name: 'Garlic' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-8.jpg'},
					{id: 12, price:32, name: 'Chili Pepper' ,insert:"restaurant",type:"all", url: 'assets/images/featured/feature-2.jpg'},
          ];

  this.pRestaurant3 = [{id: 1, price:40, name: 'Pepper' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 2, price:35, name: 'Strawberry' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 3, price:45, name: 'Chili' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 4, price:49, name: 'Cabbage' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 5, price:12, name: 'Tomato' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 6, price:44, name: 'Brocholli' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 7, price:46, name: 'Carrots' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 8, price:23, name: 'Juice' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 9, price:43, name: 'Onion' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 10, price:52, name: 'Apple' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 11, price:76, name: 'Garlic' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 12, price:89, name: 'Chili Pepper' , url: 'assets/images/featured/feature-8.jpg'},
          ];
  }
}
