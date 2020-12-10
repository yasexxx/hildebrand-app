import { CarouselService } from './../../../../_services/carousel.service';
import { Component, OnInit, ViewChildren, QueryList, OnDestroy, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from '../../../../directives/sortable.directives';
import { ProductService } from '../../../../_services/update-product.service';
import { ProductServiceOperation } from '../../../../_services/product.services';

import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';


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

  carousel$: Observable<any[]>;

  totalLatest$: Observable<any>;
  totalFeatured$: Observable<any>;
  totalTop$: Observable<any>;
  totalFoods$: Observable<any>;
  totalDrinks$: Observable<any>;
  totalDesserts$: Observable<any>;
  totalGrocery$: Observable<any>;
  totalVegetables$: Observable<any>;
  totalCannedGoods$: Observable<any>;
  
  _subscription$ : Subscription;

  message = 'The product was successfully deleted!' ;

  isTypePost:boolean = false;


  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  subscriber$ : Subscription;

  constructor(public service: ProductService,
              private productOpService: ProductServiceOperation,
              private router: Router,
              private modalService: NgbModal,
              private carouselService: CarouselService ) {
                
   }

  ngOnInit(): void {
    this.retrieveData();
    this.service.ngOnInit();
  }
  
  ngOnDestroy(): void {
    if ( this.subscriber$) { this.subscriber$.unsubscribe();}
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
    this.carousel$ = this.carouselService.getAll();
    this.totalFeatured$ = this.productOpService.getFeaturedProduct();
    this.totalTop$ = this.productOpService.getTopProduct();
    this.totalLatest$ = this.productOpService.getLatestProduct();
    this.totalFoods$ = this.productOpService.getRestaurantFood();
    this.totalDrinks$ = this.productOpService.getRestaurantDrink();
    this.totalDesserts$ = this.productOpService.getRestaurantDessert();
    this.totalGrocery$ = this.productOpService.getSupermarketGrocery();
    this.totalVegetables$ = this.productOpService.getSupermarketVegetable();
    this.totalCannedGoods$ = this.productOpService.getSupermarketCannedGoods();
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
    return 'data:'+imageStr.imageFile.mimetype+';base64,'+imageStr.imageFile.data.toString('base64');
  }

  convertCarouselImage(imageStr) {
    return 'data:'+imageStr.mimetype+';base64,'+imageStr.data.toString('base64');
  }


  editNavigateById(id){
    this.router.navigate(['admin/edit/'+id]);
  }

  viewNavigateById(id){
    this.router.navigate(['admin/product/'+id]);
  }

  navigateToCreate(){
    this.router.navigate(['admin/create']);
  }

  navigateToEditCarousel(id){
    this.router.navigate(['admin/edit-carousel/'+id]);
  }

  navigateToCarousel():void {
    this.router.navigate(['/admin/create-carousel']);
  }

  navigateToBack():void {
    this.router.navigate(['/admin/products']);
  }



}
