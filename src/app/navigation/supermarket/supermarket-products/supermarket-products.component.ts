import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supermarket-products',
  templateUrl: './supermarket-products.component.html',
  styleUrls: ['./supermarket-products.component.scss']
})
export class SupermarketProductsComponent implements OnInit {

  @Input() page:number;
  @Input() active:number;
  @Input() productSupermarket1:{}[];
  @Input() productSupermarket2:{}[];
  @Input() productSupermarket3:{}[];

  constructor() { }

  ngOnInit(): void {
  }

}
