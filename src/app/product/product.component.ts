import { ProductServiceOperation } from './../_services/product.services';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  productSize: string[];
  buttonName: string = 'Small';
  name;

  productFormat = {
    id: NaN,
    name: null,
    description: '',
    price: 0,
    size: '',
    available: 0,
    rate: 0,
  }

  currentProduct = null;

  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private toastService: NotificationsService,
              private titleService: Title,
              private productService: ProductServiceOperation
                      ) { 

  }

  ngOnInit(): void { 
  this.productSize = ['Small', 'Medium', 'Large', 'Extra Large'];
  const total = this.route.snapshot.paramMap.get('id');
  console.log(total);
  };

  changeBtnName(name:string){
    if(!name){
      console.error("Error: no string defined");
    } else {
      this.buttonName = name;
      this.productFormat.size = name;
    }
  }

  popToastInvalid (header: string, subject: string) {
    this.toastService.info(header, subject, {
      timeOut: 3000
    });
  }


  

  addToCart(id, qty) {
    const quantity = parseInt(qty, 10) || 0;
    if (quantity <= 0) {
      this.popToastInvalid('Missing Quantity', 'Did you mean to add 1?');
    }
  }


  ngOnDestroy() {

  }


}
