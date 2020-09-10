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

export class ModalContentEdit {
  @Input() name;
  titleClass = 'color: green; font-size: 1rem;'

  constructor(public activeModal: NgbActiveModal) {}

}


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  _subscription$: Subscription;
  _subscription2$: Subscription;
  isCreate:boolean;
  published = 'unPublish';
  chooseFile = 'Choose file (required)';
  isSubmitted = false;
  file: any;
  fields;
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
      fileName: '',
      mimetype: '',
      data: null
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

  getProductById(id): void {
    this.productsService.get(id)
    .subscribe( data => {
      this.product = data;
      this.setNameAndPublish();
      console.log(this.product); //logging
    }, err => { console.log(err); }
     );
  }

  setNameAndPublish(): void{
    this.chooseFile = this.product.imageFile.fileName;
    this.published = this.product.isPublished ? 'Publish': 'unPublished';
  }

  openModal() :void {
    const modalRef = this.modalService.open(ModalContentEdit, { centered: true});
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
      this.chooseFile = file.name;
      this.product.imageFile.fileName = this.chooseFile;
      this.product.imageFile.mimetype = file.type;
      const reader = new FileReader();
      reader.onload = (e) => {
          this.product.imageFile.data = e.target.result;
      }
      reader.readAsDataURL(file);
    }
    console.log(this.product);
    
  }

  updateProduct() :void {
    this._subscription2$ = this.productsService.update(this.product.id, this.product)
    .subscribe( res => {
      console.log(typeof(res));;
      console.log(res); // logging
      this.openModal();
      setTimeout( () => {
        this.closeModal();
        this.router.navigate(['admin/edit']);
        // this.router.navigate(['./edit']);
      }, 4000);
    }, err => {console.log("Error1: " + JSON.stringify(err));
    });
  }



  submittedBtn() : void {
    this.isSubmitted = false;
    
  }

  ngOnDestroy() :void {
    this._subscription2$.unsubscribe();
    
  }

  check(id){
    console.log(id);
    
  }

}



