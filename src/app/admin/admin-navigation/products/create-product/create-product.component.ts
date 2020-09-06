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
  imageUpload = null;
  published = 'unPublish';
  chooseFile = 'Choose file';
  isSubmitted = false;

  formatForCreate : {}[] ;

  product = {
    productName: '',
    description: '',
    category: '',
    price: 0,
    availableProduct:0,
    isPublished: false,

  }

  constructor(private productsService: ProductServiceOperation) {   
    this.isCreate = true;
  }

  ngOnInit(): void {}


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

      this.productsService.uploadImage(this.imageUpload);
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
    const uploadData = new FormData();
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      uploadData.append('myImage', file, file.name);
      this.imageUpload = uploadData;
      this.chooseFile = file.name;
    } else {
      this.imageUpload = null;
      this.chooseFile = 'Choose file';
  }
}

  checkBtn(){
    console.log(this.product);
    
  }


}

