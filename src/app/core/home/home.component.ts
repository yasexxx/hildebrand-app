import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product_data:any = [];
  product_latest:any = [];
  top_product:any = [];

  moneyBill = faMoneyBill;
  moneyBillWave = faMoneyBillWaveAlt;

  public product = [{id: 1, name: 'Pepper' , url: 'assets/images/spices/product-1.jpg'},
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

  public slide_images =['assets/images/img1.jpg','assets/images/img2.jpg'
					,'assets/images/img3.jpg'];



  constructor() {
    this.product_data = [
      { id:13, name: 'Pork', price: {new:500, old:700}, src: './assets/images/featured/featured/feature-1.jpg' },
      { id:14, name:'Banana', price: {new: 1500, old: false}, src: './assets/images/featured/featured/feature-2.jpg' },
      { id:15, name:'Guava', price: {new:2500, old:2900}, src: './assets/images/featured/featured/feature-3.jpg' },
      { id:16, name:'Watermelon', price: {new:4500, old:false}, src: './assets/images/featured/featured/feature-4.jpg'}
    ];

    this.product_latest = [
      { id:17, name: 'Grapes', price: {new:200, old:700}, src: './assets/images/featured/latest/latest-1.png' },
      { id:18, name:'Hamburger', price: {new: 100, old: false}, src: './assets/images/featured/latest/latest-2.png' },
      { id:19, name:'Mango', price: {new:70, old:80}, src: './assets/images/featured/latest/latest-3.png' },
      { id:20, name:'Apple', price: {new:40, old:false}, src: './assets/images/featured/latest/latest-4.png'}
    ];

    this.top_product = [
      { id:21, name: 'Fruits', price: {new:100, old:700}, src: './assets/images/featured/top/product-1.png' },
      { id:22, name:'Apple', price: {new: 50, old: false}, src: './assets/images/featured/top/product-4.png' },
      { id:23, name:'Milk', price: {new:160, old:2900}, src: './assets/images/featured/top/product-3.png' },
      { id:24, name:'Juice', price: {new:45, old:false}, src: './assets/images/featured/top/product-2.png' }
    ];
  }

  typeOf(value:any) {
    return typeof value;
  };

  ngOnInit(): void {

  }

}
