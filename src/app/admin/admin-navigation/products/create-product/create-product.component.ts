import { ProductServiceOperation } from './../../../../_services/product.services';
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
    productName: '',
    description: '',
    category: '',
    price: 0,
    availableProduct:0,
    imageUrl: null,
    isPublished: false,

  }

  published = 'unPublish';
  chooseFile = 'Choose file';

  isSubmitted = false;

  constructor(private productsService: ProductServiceOperation) {   
    this.isCreate = true;
  }

  ngOnInit(): void {
    
  }

  createProduct(): void {
    if (this.product.productName !== '') {
      this.productsService.create(this.product)
      .subscribe( response => {
        console.log(response);
        this.isSubmitted = true;
      },
      err => {
        console.log(err);
      });

      setTimeout( ()=> {
        this.isSubmitted = false;
      }, 4000 );
    }

    console.log("product: ",this.product);
    
  }





  publishCheck(publish:boolean) : void {
    if (!publish === true){
      this.product.isPublished = true;
      this.published =  'Publish';
    } else {
      this.product.isPublished = false;
      this.published = 'unPublish';
    }
  }

  onFileChanged(event) {
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      const uploadData = new FormData();
      console.log(file);
      
      uploadData.append('myFile', file, file.name);
      console.log(uploadData);
      
      this.product.imageUrl = uploadData;
      this.chooseFile = file.name;
    } else {
      this.product.imageUrl = null;
      this.chooseFile = 'Choose file';
    }

    
  }

  checkBtn(){
    console.log(this.product);
    
  }


}

