import { ProductInfo } from './../../../_services/update-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProductServiceOperation } from '../../../_services/product.services';



@Component({
  selector: `modal-content`,
  template: 
  `<div class="modal-header">
  <h4 class="modal-title" [style]="titleStyle">Information</h4>
  <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
  </div>
  <div class="modal-body">
  <p>{{name}}!</p>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
  </div>`
})

export class ModalContentEdit {
  @Input() name;
  titleStyle = 'color: green; font-size: 1rem;'

  constructor(public activeModal: NgbActiveModal) {}

}


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  
  imageDataUrl;
  timeout;
  timeout2;
  _subscription$: Subscription;
  _subscription2$: Subscription;
  _subscription3$: Subscription;
  isCreate:boolean;
  published = 'unPublish';
  chooseFile = 'Choose file (required)';
  imageUpload = null;
  private messageModal = 'The product was successfully updated!' ;


  product = {
    id: null,
    productName: '',
    description: '',
    category: '',
    price: '',
    availableProduct: '',
    isPublished: false,
    imageFile: {
      fileName: null
    }
  }


  constructor(private productsService: ProductServiceOperation,
              private modalService: NgbModal,
              private route: ActivatedRoute,
              private router: Router) {
                this.isCreate = true;
}

  ngOnInit(): void {
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }

  ngOnDestroy() :void {
    if ( this._subscription2$ !== undefined) { this._subscription2$.unsubscribe();}
    if (this._subscription$) {this._subscription$.unsubscribe();}
    if (this.timeout) { clearTimeout(this.timeout);}
    if (this.timeout2) { clearTimeout(this.timeout2);}
  }

  getProductById(id): void {
    this._subscription$ = this.productsService.get(id)
    .subscribe( data => {
      this.product =  data;
      this.setNameAndPublish();
    }, err => { console.log(err); }
     );
  }

  checkUpdate(event){
    this._subscription$ = this.productsService.get(this.route.snapshot.paramMap.get('id'))
    .subscribe( data => {
      this.inputSubmitCondition(data, event);
    }, () => { if(this._subscription$) {this._subscription$.unsubscribe(); console.log("unsub");
    }} )
  }


  inputSubmitCondition(info, value){
    const values = value.value;
    const theSame = (info.productName === values.name) && (info.description === values.description)
    && (info.category === values.category) && ( info.price === values.price) && ( info.availableProduct === values.availableProduct)
    && (this.imageUpload === null);
    if (theSame) {
      this.messageModal = "No changes done try change one field before clicking update";
      this.openModal();
      this.closeModal();
     } else {
       this.updateProduct();
     }
  }


  onFileChanged (event) :void {
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.imageUpload = file;
      this.chooseFile = file.name;
      this.imageDisplay();
    } else {
      this.messageModal = "Please select a valid image file";
      this.openModal();
      this.closeModal()
    } 
  }

  imageDisplay(){
    if ( this.imageUpload !== null || undefined ){
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageDataUrl = e.target.result;
      };
      reader.readAsDataURL(this.imageUpload);
    }
  }


  updateProduct() :void {
    const formData = this.dataCollector()
    this._subscription2$ = this.productsService.update(this.product.id, formData)
    .subscribe( res => {
      this.messageModal = res.message;
      this.openModal();
      this.timeout2 = setTimeout( () => {
        try {
          this.modalService.dismissAll();
        } catch (error) {
          console.log(error);
        }
        this.router.navigate(['admin/edit/']);
      }, 4500);
    }, err => {console.log(err.message);
    });
  }


  dataCollector() {
    let formData = new FormData();
    if ( this.imageUpload !== null || undefined ){
      formData.append('file', this.imageUpload);
      const newData = this.dataPasser(formData)
      return newData;
    } else {
      const otherData = this.dataPasser(formData);
      return otherData;
    }
  }

  dataPasser(data) {
    data.append('productName', this.product.productName);
    data.append('description', this.product.description);
    data.append('category', this.product.category);
    data.append('price', this.product.price.toString());
    data.append('availableProduct', this.product.availableProduct.toString());
    data.append('isPublished', this.product.isPublished.toString());
    return data;
  }


  setNameAndPublish(): void{
    if (this.product.imageFile.fileName !== null || undefined){
      this.chooseFile = this.product.imageFile.fileName;
    }
    this.published = this.product.isPublished ? 'Publish': 'unPublished';
  }

  openModal() :void {
    const modalRef = this.modalService.open(ModalContentEdit, { centered: true});
    modalRef.componentInstance.name = this.messageModal;
  }

  closeModal() :void {
    try{
      this.timeout = setTimeout( () => {this.modalService.dismissAll();} , 3500);
    } catch(err){
      console.log(err);
      
    }
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



}

