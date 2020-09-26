import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-products',
  templateUrl: './restaurant-products.component.html',
  styleUrls: ['./restaurant-products.component.scss']
})
export class RestaurantProductsComponent implements OnInit {

  @Input() allProducts$;
  @Input() foodProducts$;
  @Input() drinkProducts$;
  @Input() dessertProducts$;
  @Input() page:number;
  @Input() active:number;

  constructor() { 
  }

  ngOnInit(): void {
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

}
