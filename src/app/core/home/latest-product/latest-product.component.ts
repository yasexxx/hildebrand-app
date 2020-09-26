import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.scss']
})
export class LatestProductComponent implements OnInit {
  @Input() latestProduct$: [];
  
  constructor() { }

  ngOnInit(): void {
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

}
