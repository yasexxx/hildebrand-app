import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent implements OnInit {

  @Input() topProduct$: [];
  
  constructor() { }

  ngOnInit(): void {
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

}
