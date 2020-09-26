import { CarouselService } from './../../_services/carousel.service';
import { Subscription } from 'rxjs';
import { ProductServiceOperation } from './../../_services/product.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { faMoneyBill, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';
import { UserService } from './../../_services/user.service';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    HeaderComponent
  ]
})
export class HomeComponent implements OnInit, OnDestroy {
  product_latest:{}[] = [];
  top_product:{}[] = [];
  slideImages: any[] = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnHover = true;

  moneyBill = faMoneyBill;
  moneyBillWave = faMoneyBillWaveAlt;
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
              private header: HeaderComponent,
              private productService: ProductServiceOperation ) {}

  

  typeOf(value:any) {
    return typeof value;
  };


  ngOnInit(): void {
    this.subscription4$ = this.carouselService.getAll()
    .subscribe(
      data => {
        this.slideImages = data;
        console.log(this.slideImages);
        
      }
    )
    this.subscription$ = this.productService.getFeaturedProduct()
    .subscribe( 
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const length = newData.length;
        const rem = length % 4;
        newData.splice(length-rem, length);
        this.featuredProduct = newData;
        
      }
    );
    this.subscription2$ = this.productService.getTopProduct()
    .subscribe(
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const length = newData.length;
        const rem = length % 4;
        newData.splice(length-rem, length);
        this.topProduct = newData;
      }
    );
    this.subscription3$ = this.productService.getLatestProduct()
    .subscribe(
      data => {
        const newData = data.filter( li => li.isPublished === true  )
        const length = newData.length;
        const rem = length % 4;
        newData.splice(length-rem, length);
        this.latestProduct = newData;
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
          const errlog = JSON.parse(err.error).message;
          console.log(errlog);
          this.isContentRender = false;
          
        }
      );
  }

  ngOnDestroy(): void {
    if( this.subscription$) { this.subscription$.unsubscribe(); }
    if( this.subscription2$) { this.subscription2$.unsubscribe(); }
    if( this.subscription3$) { this.subscription3$.unsubscribe(); }
    if( this.subscription4$) { this.subscription4$.unsubscribe(); }
  }

  convert2Base64(imageStr){
    return 'data:'+imageStr.mimetype+';base64,'+imageStr.data.toString('base64');
  }

}
