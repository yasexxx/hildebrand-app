import { ProductContents, ProductLocalHome, ProductLocalNewHome, ProductDetail  } from './../../../services/product-local';
import { Component, OnInit } from '@angular/core';
import { ProductLocalService  } from '../../../services/product-local.service';



interface ProductsHomeBundle {
  productsFeatured:ProductLocalHome[];
  productsLatest:ProductLocalHome[];
  productsTop:ProductLocalHome[];
}

interface ProductsBundle {
  products1:ProductDetail[];
  products2:ProductDetail[];
  products3:ProductDetail[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productContents:ProductContents[];

  HomePageBundle:ProductsHomeBundle[];
  SupermarketBundle:ProductsBundle[];
  RestaurantBundle:ProductsBundle[];

  constructor(private localProductService: ProductLocalService) {
    const initService = this.localProductService;
    let initProductService = initService.homeProductDisplay();
    const productFeatured = initService.pHome1;
    const productLatest = initService.pHome2;
    const topProduct = initService.pHome3;
    initProductService = initService.restaurantDisplay();
    const productRestaurant1 = initService.pRestaurant1;
    const productRestaurant2 = initService.pRestaurant2;
    const productRestaurant3 = initService.pRestaurant3;
    initProductService = initService.superMarketDisplay();
    const productSupermarket1 = initService.pSupermarket1;
    const productSupermarket2 = initService.pSupermarket2;
    const productSupermarket3 = initService.pSupermarket3;

    this.HomePageBundle =[
      { productsFeatured: productFeatured,
        productsLatest: productLatest,
        productsTop:topProduct}
    ]

    this.SupermarketBundle = [
      { products1:productSupermarket1,
        products2:productSupermarket2,
        products3:productSupermarket3
      }
    ]

    this.RestaurantBundle = [
      { products1: productRestaurant1,
        products2: productRestaurant2,
        products3: productRestaurant3
      }
    ]

    this.productContents = [
      {id:1 , title:"Homepage Product",
      content:this.HomePageBundle},
      {id:2 , title:"Restaurant Product",
      content:this.RestaurantBundle},
      {id:3 , title:"Supermarket Product",
      content:this.SupermarketBundle}
    ];
   }

  ngOnInit(): void {
  }


}
