import { Component, OnInit } from '@angular/core';
import { ProductServiceOperation } from '../../_services/product.services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  products = [];

  constructor(private productService: ProductServiceOperation) { }
  
  ngOnInit(): void {
    this.productService.getAll()
      .subscribe( products => {
        this.products = products;
      })
  }

}
