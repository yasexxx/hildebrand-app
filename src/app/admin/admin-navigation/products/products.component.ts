import { Component, OnInit } from '@angular/core';
import { ProductLocalService } from '../../../services/product-local.service';


interface ProductContents {
  id:number;
  title:string;
  content:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product_data:any = [];
  product_latest:any = [];
  top_product:any = [];
  slide_images:any = [];

  productContents;

  prod;

  constructor(private localProductService: ProductLocalService) {
    const initHomeProduct = this.localProductService.homeProductDisplay();
    this.product_data = this.localProductService.pHome1;
    this.product_latest = this.localProductService.pHome2;
    this.top_product = this.localProductService.pHome3;
    
    this.productContents = [
      {id:1 , title:"Homepage Product", 
      content:"ajdlfae"},
      {id:1 , title:"Restaurant Product", content:`Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
      iphone. Seitan aliquip quis cardigan american`},
      {id:1 , title:"Supermarket Product", content:`Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
      master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh
      dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum
      iphone. Seitan aliquip quis cardigan american`}
    ];
   }

  ngOnInit(): void {
  }


}
