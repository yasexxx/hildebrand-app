import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  @Input() top_product: [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
