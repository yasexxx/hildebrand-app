import { ProductLocalService } from './../../services/product-local.service';
import { Component, OnInit } from '@angular/core';
import { faMoneyBill, faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product_data:any = [];
  product_latest:any = [];
  top_product:any = [];
  slide_images:any = [];
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
      const initHomeProduct = this.homeProductService.homeProductDisplay();
      this.product_data = this.homeProductService.pHome1;
      this.product_latest = this.homeProductService.pHome2;
      this.top_product = this.homeProductService.pHome3;
      this.slide_images = this.homeProductService.bg_images;
  }

}
