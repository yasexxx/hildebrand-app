import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supermarket-products',
  templateUrl: './supermarket-products.component.html',
  styleUrls: ['./supermarket-products.component.scss']
})
export class SupermarketProductsComponent implements OnInit {
  @Input() page:number;
  @Input() active:number;
  @Input() allProducts$:any[];
  @Input() groceryProducts$:any[];
  @Input() vegetableProducts$:any[];
  @Input() cannedGoodsProducts$:any[];

  constructor() { }

  ngOnInit(): void {
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

}
