import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.scss']
})
export class LatestProductComponent implements OnInit {
  @Input() product_latest: [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
