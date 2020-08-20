import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  productCart = [{
    name: "asi", img: "https://picsum.photos/200", price:52
  },
  {
    name: "ayase", img: "https://picsum.photos/201", price:51
  },
  {
    name: "aasd", img: "https://picsum.photos/202", price:51
  },
  {
    name: "asiadf", img: "https://picsum.photos/203", price:54
  },
  {
    name: "assdfi", img: "https://picsum.photos/204", price:52
  },
  {
    name: "assfi", img: "https://picsum.photos/205", price:53
  },]
  constructor() { }

  ngOnInit(): void {
  }

}
