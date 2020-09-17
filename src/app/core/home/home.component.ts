import { ProductLocalService } from './../../services/product-local.service';
import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  product_data:{}[] = [];
  product_latest:{}[] = [];
  top_product:{}[] = [];
  slide_images: string[] = [];
  paused = false;
  unpauseOnArrow = false;
  pauseOnHover = true;

  moneyBill = faMoneyBill;
  moneyBillWave = faMoneyBillWaveAlt;
  isContentRender = true;


  constructor(private homeProductService: ProductLocalService,
              private userService: UserService,
              private header: HeaderComponent) {}

  

  typeOf(value:any) {
    return typeof value;
  };


  ngOnInit(): void {
    this.header.ngOnInit();
      this.product_data = this.homeProductService.getHomeFeature();
      this.product_latest = this.homeProductService.getHomeLatest();
      this.top_product = this.homeProductService.getTopProducts();
      this.slide_images = this.homeProductService.getDisplayCarousel();
      
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

}
