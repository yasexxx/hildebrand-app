import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ProductDetail } from './../../../../services/product-local';
import { NgbdSortableHeader, SortEvent } from '../../../../directives/sortable.directives';
import { ProductService } from '../../../../services/product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  products$ : Observable<ProductDetail[]>;
  total$ : Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: ProductService) {
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



}
