import { ProductLocalService } from './../../../../services/product-local.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  dummyPickFeature:any;

  isCreate:boolean;

  formatForCreate : {}[] ;

  product = {
    name: '',
    description: '',
    category: '',
    price: '',
    availableProduct:'',
    imageUrl: '',
    published: false,

  }

  published = 'unPublish';

  chooseFile = 'Choose file'



  constructor(private productsService: ProductLocalService) {
    console.log(this.product);
    
    this.isCreate = true;
  }

  ngOnInit(): void {
    
  }


  sortCreateTitle(title: any[]) {
    const ascendOrder = title.sort( (a, b) => a.order - b.order ? 1: -1);
    return ascendOrder;
  }

  publishCheck(publish:boolean) : void {
    if (!publish === true){
      this.product.published = true;
      this.published =  'Publish';
    } else {
      this.product.published = false;
      this.published = 'unPublish';
    }
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.product.imageUrl = file;
      this.chooseFile = file.name;
    } else {
      this.product.imageUrl = '';
      this.chooseFile = 'Choose file';
    }

    
  }

  checkBtn(){
    console.log(this.product);
    
  }


}

