import { Component, OnInit } from '@angular/core';


interface UserOrders {
  id?: number;
  user: string;
  product: string;
  price: number;
  quantity: number;
  paymentOption: string;
  totalAmount: number;
  date: string;
}

const ORDERS: UserOrders[] = [
  {
    user: 'Michael',
    product: 'Orange',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'John',
    product: 'Meat',
    quantity: 1,
    price: 1234,
    paymentOption: 'paypal',
    totalAmount: 900,
    date: '09/20/22'
  },
  {
    user: 'Lina',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 3000,
    date: '09/20/21'
  },
  {
    user: 'Miael',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Achael',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Haele',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Micel',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Mihael',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Kochael',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Rochael',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Micsel',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Misael',
    product: 'Banana',
    price: 234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Mikhael',
    product: 'Banana',
    price: 324,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Rehael',
    product: 'Banana',
    price: 124,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Mashael',
    product: 'Banana',
    price: 415,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Marshall',
    product: 'Banana',
    price: 144,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Mdopwl',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Asdichael',
    product: 'Banana',
    price: 1234,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Lopahael',
    product: 'Banana',
    price: 104,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 5000,
    date: '09/20/24'
  },
  {
    user: 'Minasichael',
    product: 'Banana',
    price: 501,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 700,
    date: '09/20/24'
  },
  {
    user: 'Horal',
    product: 'Banana',
    price: 405,
    quantity: 1,
    paymentOption: 'cod',
    totalAmount: 20,
    date: '09/20/24'
  },
  {
    user: 'Mendael',
    product: 'Banana',
    price: 410,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 5000,
    date: '09/20/24'
  },
  {
    user: 'Michael',
    product: 'Banana',
    price: 402,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 400,
    date: '09/20/24'
  },
  {
    user: 'Michael',
    product: 'Banana',
    price: 502,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Michael',
    product: 'Banana',
    price: 401,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Michael',
    product: 'Banana',
    price: 902,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  },
  {
    user: 'Michael',
    product: 'Banana',
    price: 402,
    quantity: 2,
    paymentOption: 'cod',
    totalAmount: 1000,
    date: '09/20/24'
  }
  
];


@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {

  page = 1;
  pageSize = 13;
  collectionSize = ORDERS.length;
  countries: UserOrders[];

  constructor() {
    this.refreshCountries();
  }

  refreshCountries() {
    this.countries = ORDERS
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  ngOnInit(): void {
  }

}
