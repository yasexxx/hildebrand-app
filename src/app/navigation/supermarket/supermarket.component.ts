import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supermarket',
  templateUrl: './supermarket.component.html',
  styleUrls: ['./supermarket.component.scss']
})
export class SupermarketComponent implements OnInit {

  page = 1;
  active = 1;

  productSupermarket1 = [{id: 1, name: 'Pepper' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 2, name: 'Strawberry' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 3, name: 'Chili' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 4, name: 'Cabbage' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 5, name: 'Tomato' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, name: 'Brocholli' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 7, name: 'Carrots' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 8, name: 'Juice' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 9, name: 'Onion' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, name: 'Apple' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 11, name: 'Garlic' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 12, name: 'Chili Pepper' , url: 'assets/images/featured/feature-4.jpg'},
          ];

  productSupermarket2 = [{id: 1, name: 'Pepper' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 2, name: 'Strawberry' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 3, name: 'Chili' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 4, name: 'Cabbage' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 5, name: 'Tomato' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 6, name: 'Brocholli' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 7, name: 'Carrots' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 8, name: 'Juice' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 9, name: 'Onion' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 10, name: 'Apple' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 11, name: 'Garlic' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 12, name: 'Chili Pepper' , url: 'assets/images/featured/feature-2.jpg'},
          ];

  productSupermarket3 = [{id: 1, name: 'Pepper' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 2, name: 'Strawberry' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 3, name: 'Chili' , url: 'assets/images/featured/feature-6.jpg'},
					{id: 4, name: 'Cabbage' , url: 'assets/images/featured/feature-7.jpg'},
					{id: 5, name: 'Tomato' , url: 'assets/images/featured/feature-8.jpg'},
					{id: 6, name: 'Brocholli' , url: 'assets/images/featured/feature-1.jpg'},
					{id: 7, name: 'Carrots' , url: 'assets/images/featured/feature-2.jpg'},
					{id: 8, name: 'Juice' , url: 'assets/images/featured/feature-3.jpg'},
					{id: 9, name: 'Onion' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 10, name: 'Apple' , url: 'assets/images/featured/feature-5.jpg'},
					{id: 11, name: 'Garlic' , url: 'assets/images/featured/feature-4.jpg'},
					{id: 12, name: 'Chili Pepper' , url: 'assets/images/featured/feature-8.jpg'},
          ];

  constructor() { }

  ngOnInit(): void {
  }


}
