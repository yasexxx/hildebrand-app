import { ProductServiceOperation } from './../../../../_services/product.services';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: `modal-content`,
  template: 
  `<div class="modal-header">
  <h4 class="modal-title" [style]="titleClass">Information</h4>
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

export class ModalContent {
  @Input() name;
  titleClass = 'color: green; font-size: 1rem;'

  constructor(public activeModal: NgbActiveModal) {}

}


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit, OnDestroy {

  _subscription$: Subscription;
  isCreate:boolean;
  published = 'unPublish';
  chooseFile = 'Choose file';
  isSubmitted = false;
  file: any;

  private imageUpload = null;
  private messageModal = 'The product was successfully submitted!' ;

  product = {
    productName: '',
    description: '',
    category: '',
    price: '',
    availableProduct: '',
    isPublished: false,

  }

  constructor(private productsService: ProductServiceOperation,
              private modalService: NgbModal,
              private router: Router) 
  { 
    this.isCreate = true;
  }

  ngOnInit(): void {
  }

  openModal() :void {
    const modalRef = this.modalService.open(ModalContent, { centered: true});
    modalRef.componentInstance.name = this.messageModal;
  }

  closeModal() :void {
    this.modalService.dismissAll();
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

  onFileChanged (event) :void {
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.imageUpload = file;
      this.chooseFile = file.name;
    }
  }

  onSubmit() :void {
    const formData = new FormData();
    formData.append('file', this.imageUpload);
    formData.append('productName', this.product.productName);
    formData.append('description', this.product.description);
    formData.append('category', this.product.category);
    formData.append('price', this.product.price.toString());
    formData.append('availableProduct', this.product.availableProduct.toString());
    formData.append('isPublished', this.product.price.toString());

    if(formData){
      this._subscription$ = this.productsService.create(formData).subscribe(
        (res) => {
          console.log(res);
          
          this.messageModal = res.message
          this.openModal();
          setTimeout( ()=> {
            if (res) this.closeModal(); this.isSubmitted = true;
            this.chooseFile = 'Choose file';
          }, 5000 );
        }
        ,
        (err) => console.log(err)
      );
      }
    }



  submittedBtn() : void {
    this.isSubmitted = false;
  }

  ngOnDestroy() :void {
    if (this._subscription$ !== undefined){
      this._subscription$.unsubscribe();
    }
  }

  navigateEdit(){
    this.router.navigate(['admin/edit']);
  }


}
