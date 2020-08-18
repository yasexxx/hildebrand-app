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
      { id:13, name: 'Pork', price: {new:500, old:700}, src: './assets/images/featured/featured/feature-1.jpg' },
      { id:14, name:'Banana', price: {new: 1500, old: false}, src: './assets/images/featured/featured/feature-2.jpg' },
      { id:15, name:'Guava', price: {new:2500, old:2900}, src: './assets/images/featured/featured/feature-3.jpg' },
      { id:16, name:'Watermelon', price: {new:4500, old:false}, src: './assets/images/featured/featured/feature-4.jpg'}
    ];

    this.pHome2 = [
      { id:17, name: 'Grapes', price: {new:200, old:700}, src: './assets/images/featured/latest/latest-1.png' },
      { id:18, name:'Hamburger', price: {new: 100, old: false}, src: './assets/images/featured/latest/latest-2.png' },
      { id:19, name:'Mango', price: {new:70, old:80}, src: './assets/images/featured/latest/latest-3.png' },
      { id:20, name:'Apple', price: {new:40, old:false}, src: './assets/images/featured/latest/latest-4.png'}
    ];

    this.pHome3 = [
      { id:21, name: 'Fruits', price: {new:100, old:700}, src: './assets/images/featured/top/product-1.png' },
      { id:22, name:'Apple', price: {new: 50, old: false}, src: './assets/images/featured/top/product-4.png' },
      { id:23, name:'Milk', price: {new:160, old:2900}, src: './assets/images/featured/top/product-3.png' },
      { id:24, name:'Juice', price: {new:45, old:false}, src: './assets/images/featured/top/product-2.png' }
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

    this.pSupermarket1 = [{id: 1, price:40, name: 'Pepper' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 2, price:40,name: 'Strawberry' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 3, price:60,name: 'Chili' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 4, price:70,name: 'Cabbage' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 5, price:90,name: 'Tomato' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:100,name: 'Brocholli' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 7,price:130, name: 'Carrots' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 8, price:230,name: 'Juice' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 9, price:130,name: 'Onion' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:200,name: 'Apple' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 11, price:390,name: 'Garlic' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 12, price:180,name: 'Chili Pepper' , url: 'assets/images/featured/feature-4.jpg'},
          ];

  this.pSupermarket2 = [{id: 1, price:40, name: 'Pepper' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 2, price:30,name: 'Strawberry' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 3, price:30,name: 'Chili' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 4,price:30, name: 'Cabbage' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 5, price:30,name: 'Tomato' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:30,name: 'Brocholli' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 7, price:30,name: 'Carrots' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 8, price:30,name: 'Juice' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 9,price:30, name: 'Onion' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:30,name: 'Apple' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 11, price:30,name: 'Garlic' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 12,price:30, name: 'Chili Pepper' , url: 'assets/images/featured/feature-2.jpg'},
          ];

  this.pSupermarket3 = [{id: 1, name: 'Pepper' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 2, price:30, name: 'Strawberry' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 3, price:20,name: 'Chili' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 4, price:50,name: 'Cabbage' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 5, price:60,name: 'Tomato' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 6, price:70,name: 'Brocholli' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 7, price:80,name: 'Carrots' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 8, price:90,name: 'Juice' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 9, price:100,name: 'Onion' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 10, price:120,name: 'Apple' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 11, price:130, name: 'Garlic' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 12, price:90, name: 'Chili Pepper' , url: 'assets/images/featured/feature-8.jpg'},
          ];

  }

  restaurantDisplay(){

  this.pRestaurant1 = [{id: 1, price:40, name: 'Pepper' , url: 'https://picsum.photos/204'},
					{id: 2, price:50, name: 'Strawberry' , url: 'https://picsum.photos/200'},
					{id: 3, price:60, name: 'Chili' , url: 'https://picsum.photos/201'},
					{id: 4, price:70, name: 'Cabbage' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 5, price:80, name: 'Tomato' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:90, name: 'Brocholli' , url: 'https://picsum.photos/202'},
					{id: 7, price:100, name: 'Carrots' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 8, price:40, name: 'Juice' , url: 'https://picsum.photos/203'},
					{id: 9, price:40, name: 'Onion' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:40, name: 'Apple' , url: 'https://picsum.photos/205'},
					{id: 11, price:40, name: 'Garlic' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 12, price:40, name: 'Chili Pepper' , url: 'https://picsum.photos/206'},
          ];

  this.pRestaurant2 = [{id: 1, name: 'Pepper' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 2, price:40, name: 'Strawberry' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 3, price:40, name: 'Chili' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 4, price:40, name: 'Cabbage' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 5, price:40, name: 'Tomato' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, price:40, name: 'Brocholli' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 7, price:40, name: 'Carrots' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 8, price:40, name: 'Juice' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 9, price:40, name: 'Onion' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, price:40, name: 'Apple' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 11, price:40, name: 'Garlic' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 12, price:40, name: 'Chili Pepper' , url: 'assets/images/featured/feature-2.jpg'},
          ];

  this.pRestaurant3 = [{id: 1, price:40, name: 'Pepper' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 2, price:40, name: 'Strawberry' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 3, price:40, name: 'Chili' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 4, price:40, name: 'Cabbage' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 5, price:40, name: 'Tomato' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 6, price:40, name: 'Brocholli' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 7, price:40, name: 'Carrots' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 8, price:40, name: 'Juice' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 9, price:40, name: 'Onion' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 10, price:40, name: 'Apple' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 11, price:40, name: 'Garlic' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 12, price:40, name: 'Chili Pepper' , url: 'assets/images/featured/feature-8.jpg'},
          ];
  }
}
