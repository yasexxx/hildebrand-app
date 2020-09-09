import { Component, OnInit, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from '../../../../directives/sortable.directives';
import { ProductService } from '../../../../_services/update-product.service';
import { ProductServiceOperation } from '../../../../_services/product.services';


interface ProductInfo {
  productId: number;
  id: number;
  productName: string;
  description: string;
  price: number;
  category: string;
  availableProduct: number;
  imageFile: {
      fileName:string;
      data:string;
      mimetype: string;
  }

}

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit, OnDestroy {

  products$ : Observable<ProductInfo[]>;
  total$ : Observable<number>;
  
  _subscription$ : Subscription;
  packer: ProductInfo;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ProductService,
              private productOpService: ProductServiceOperation) {
    this.products$ = service.products$;
    this.total$ = service.total$;
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

   
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getProduct(id): void {
    this.productOpService.get(id)
    .subscribe( data => {
      
    })
  }


  deleteProduct() {
  }



}
