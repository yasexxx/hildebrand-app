import { ProductServiceOperation } from './../_services/product.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  
  name;
  isAdmin;
  timeout;
  subscription$ : Subscription;
  subscription2$ : Subscription;
  
  productSize: string[];
  buttonName: string = 'Small';


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

  currentProduct = null;

  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private toastService: NotificationsService,
              private titleService: Title,
              private productsService: ProductServiceOperation
                      ) { this.isAdmin = true;

  }

  ngOnInit(): void { 
  this.productSize = ['Small', 'Medium', 'Large', 'Extra Large'];
  this.getProductId(this.route.snapshot.paramMap.get('id'));
  }

  ngOnDestroy() {
    if (this.timeout){ clearTimeout(this.timeout); }
    if (this.subscription$) { this.subscription$.unsubscribe(); }
  }

  getProductId(id) {
    this.subscription$ = this.productsService.get(id)
    .subscribe( data => {
      this.product = data;
      console.log(data);
      
    }, err => {
      console.log(err);
    });
  }

  changeBtnName(name:string){
    if(!name){
      console.error("Error: no string defined");
    } else {
      this.buttonName = name;
    }
  }

  popToastInvalid (header: string, subject: string) {
    this.toastService.info(header, subject, {
      timeOut: 3000
    });
  }

  convertTypeImage(imageStr) {
    const imgData = imageStr.imageFile.data;
    if( imgData !== undefined){
      return 'data:'+imageStr.imageFile.mimetype+';base64,'+imgData.toString('base64');
    }
    return;
  }
  

  addToCart(id, qty) {
    const quantity = parseInt(qty, 10) || 0;
    if (quantity <= 0) {
      this.popToastInvalid('Missing Quantity', 'Did you mean to add 1?');
    }
  }

  navigateToEdit(){
    this.timeout = setTimeout( () => {
      this.router.navigate(['admin/edit']);
    }, 500);
  }

}
