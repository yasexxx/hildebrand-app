import { Component, OnInit, ViewChildren, QueryList, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from '../../../../directives/sortable.directives';
import { ProductService } from '../../../../_services/update-product.service';
import { ProductServiceOperation } from '../../../../_services/product.services';

import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';



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

export class ModalContentUpdateRefresh {
  @Input() name;
  titleClass = 'color: green; font-size: 1rem;'

  constructor(public activeModal: NgbActiveModal) {}

}


// ================================================================ //


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit, OnDestroy {

  // products$ : Observable<ProductInfo[]>;
  total$ : Observable<number>;
  
  _subscription$ : Subscription;

  dataContainer = [];

  timeStap;
  linkImage;
  message = 'The product was successfully deleted!' ;


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  subscriber$ : Subscription;

  constructor(public service: ProductService,
              private productOpService: ProductServiceOperation,
              private router: Router,
              private modalService: NgbModal ) {
   }

  ngOnInit(): void {
    this.retrieveData();
    this.service.ngOnInit();
  }
  
  ngOnDestroy(): void {
    if ( this.subscriber$ !== undefined) { this.subscriber$.unsubscribe();}
    this.service.ngOnDestroy();
  }

  openModal() :void {
    const modalRef = this.modalService.open(ModalContentUpdateRefresh, { centered: true});
    modalRef.componentInstance.name = this.message;
  }

  closeModal() :void {
    this.modalService.dismissAll();
  }

  onSort({column, direction}: SortEvent) {
     //resetting other headers
     this.headers.forEach( header => {
       if(header.sortable ! == column) {
         header.direction = '';
       }
     });
     this.service.sortColumn = column;
     this.service.sortDirection = direction;
   }

  retrieveData(): void {
    this.total$ = this.service.total$;
    this.subscriber$ = this.service.products$.subscribe ( data => {
      this.dataContainer = data;
    });
  }


  deleteProduct(id):void {
    this.productOpService.delete(id)
    .subscribe( res => {
      this.service.ngOnInit();
      this.message = res.message;
      this.openModal();
      setTimeout( () => {
        this.closeModal();
      }, 3000);
    },
    err => {
      console.log(err);
      
    });
  }


  convertTypeImage(imageStr) {
    return this.linkImage = 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64')
  }


  navigateById(id){
    this.router.navigate(['admin/edit/'+id]);
  }


}
