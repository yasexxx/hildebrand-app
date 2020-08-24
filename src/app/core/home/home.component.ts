import { ProductLocalService } from './../../services/product-local.service';
import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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



  constructor(private homeProductService: ProductLocalService) {

  }

  typeOf(value:any) {
    return typeof value;
  };


  ngOnInit(): void {
      this.product_data = this.homeProductService.getHomeFeature();
      this.product_latest = this.homeProductService.getHomeLatest();
      this.top_product = this.homeProductService.getTopProducts();
      this.slide_images = this.homeProductService.getDisplayCarousel();
  }

}
