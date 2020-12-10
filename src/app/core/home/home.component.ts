import { CarouselService } from './../../_services/carousel.service';
import { Subscription, of } from 'rxjs';
import { ProductServiceOperation } from './../../_services/product.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons/';
import { UserService } from './../../_services/user.service';
import { HeaderComponent } from './../header/header.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { LoaderService } from '../../_services/loader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HeaderComponent,
    ShoppingCartComponent
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  slideImages: any[] = null;
  paused = false;
  unpauseOnArrow = false;
  pauseOnHover = true;

  moneyBill = faMoneyBill;
  isContentRender = true;
  
  featuredProduct: any[];
  latestProduct: any[];
  topProduct:  any[];

  subscription$ : Subscription;
  subscription2$ : Subscription;
  subscription3$ : Subscription;
  subscription4$: Subscription;


  constructor(private userService: UserService,
              private carouselService: CarouselService,
              private shoppingComponent: ShoppingCartComponent,
              private header: HeaderComponent,
              public loadService: LoaderService,
              private productService: ProductServiceOperation) {}


  ngOnInit(): void {
    this.loadService.show();
    this.subscription4$ = this.carouselService.getAll()
    .subscribe(
      data => {
        this.slideImages = data;
      }
    )
    this.subscription$ = this.productService.getFeaturedProduct()
    .subscribe( 
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const modifiedData = this.arrangeBy4(newData);
        this.featuredProduct = modifiedData;
        if (this.featuredProduct.length > 0){
          this.loadService.hide();
        }
      },err => {
        this.loadService.hide();}
    );
    this.subscription2$ = this.productService.getTopProduct()
    .subscribe(
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const modifiedData = this.arrangeBy4(newData);
        this.topProduct = modifiedData;
      }
    );
    this.subscription3$ = this.productService.getLatestProduct()
    .subscribe(
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const modifiedData = this.arrangeBy4(newData);
        this.latestProduct = modifiedData;
      }
    );
    this.header.ngOnInit();
      
      this.userService.getPublicContent().subscribe(
        data => {
          if(data){
            this.isContentRender = true;
          }
        },
        err => {
          this.isContentRender = false;
          
        }
      );
    this.shoppingComponent.ngOnInit();
  }

  typeOf(value:any) {
    return typeof value;
  };


  of(value){
    return of(value);
  }


  arrangeBy4(data) {
    const length = data.length;
    const rem = length % 4;
    data.splice(length-rem, length);
    return data;
  }

  ngOnDestroy(): void {
    if( this.subscription$) { this.subscription$.unsubscribe(); }
    if( this.subscription2$) { this.subscription2$.unsubscribe(); }
    if( this.subscription3$) { this.subscription3$.unsubscribe(); }
    if( this.subscription4$) { this.subscription4$.unsubscribe(); }
    this.header.ngOnDestroy();
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.mimetype+';base64,'+imageStr.data.toString('base64');
  }

}
