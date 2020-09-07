import { ProductServiceOperation } from './../../../../_services/product.services';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



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
  uploadForm : FormGroup;


  product = {
    productName: '',
    description: '',
    category: '',
    price: 0,
    availableProduct:0,
    isPublished: false,

  }

  baseUrl;

  constructor(private productsService: ProductServiceOperation,
              private formBuilder: FormBuilder,
              private http: HttpClient) 
  { 
    this.isCreate = true;
  }

  ngOnInit(): void {
    this.uploadForm =  this.formBuilder.group(
      {
        upload: ['']
      });
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
      this.uploadForm.get('upload').setValue(file);
      this.chooseFile = file.name;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('upload').value);
    formData.append('name', this.product.productName);
    formData.append('description', this.product.productName);
    formData.append('category', this.product.category);
    formData.append('price', this.product.price.toString());
    formData.append('availableProduct', this.product.availableProduct.toString());
    formData.append('isPublished', this.product.price.toString());

    
    if(formData){
      this.productsService.create(formData).subscribe(
        (res) => {console.log(res);
          setTimeout( ()=> {
            this.isSubmitted = false;
          }, 4000 );
        }
        ,
        (err) => console.log(err)
      );
      }
    
    if (this.product.productName !== '') {
        this.productsService.create(this.product)
        .subscribe( response => {
          console.log(response);
          this.isSubmitted = true;
        },
        err => {
          console.log(err);
        });
      }
    

    console.log("product: ",this.product);
    
  }


  checkBtn(){
    console.log(this.product);
    
  }


}

