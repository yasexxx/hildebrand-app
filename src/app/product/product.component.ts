import { ProductServiceOperation } from './../_services/product.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { CartService } from '../_services/cart.service';
import { TokenStackService } from '../_services/token-stack.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  
  name;
  isAdmin = false;
  timeout;
  subscription$ : Subscription;
  subscription2$ : Subscription;
  
  productSize: string[];
  buttonName: string = 'Small';

  currentRate = 0;
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
  userId: string;
  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private toastService: NotificationsService,
              private cartService: CartService,
              private tokenService: TokenStackService,
              private titleService: Title,
              private productsService: ProductServiceOperation
                      ) { this.isAdmin = false;
                          this.currentRate = 3.56;
                          this.titleService.setTitle(this.product.productName);

  }

  ngOnInit(): void { 
  this.productSize = ['Small', 'Medium', 'Large', 'Extra Large'];
  this.getProductId(this.route.snapshot.paramMap.get('id'));
  const user = this.tokenService.getUser();
    if (!!user){
      this.userId = user.id;
    }
  }

  ngOnDestroy() {
    if (this.timeout){ clearTimeout(this.timeout); }
    if (this.subscription$) { this.subscription$.unsubscribe(); }
  }

  getProductId(id) {
    this.subscription$ = this.productsService.get(id)
    .subscribe( data => {
      this.product = data;
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

  convertTypeImage(imageStr) {
    const imgData = imageStr.imageFile.data;
    if( imgData !== undefined){
      return 'data:'+imageStr.imageFile.mimetype+';base64,'+imgData.toString('base64');
    }
    return;
  }
  

  addCart(product, qty= 1, id=0) {
    this.cartService.addToCart(product = product, qty = qty, id);
    this.popToast(true, qty, product);
  };

  popToast(isTrue: boolean, quantity: number, product) {
    if (isTrue) {
      this.toastService.success(
        `${quantity} Added`,
        `${product.productName}...`
      );
    } else {
      this.router.navigate(['/login']);
    }
  }

  popToastInvalid(header: string, subject: string) {
    this.toastService.info(header, subject, {
      timeOut: 3000
    });
  }

  navigateToEdit(){
    this.timeout = setTimeout( () => {
      this.router.navigate(['admin/edit']);
    }, 500);
  }

}
