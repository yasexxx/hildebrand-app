import { Component, OnInit } from '@angular/core';
import { ProductLocalService  } from '../../../services/product-local.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productContents:{}[];

  HomePageBundle:{}[];
  SupermarketBundle:{}[];
  RestaurantBundle:{}[];


  constructor(private productService: ProductLocalService) {
    const productFeatured = productService.getHomeFeature();
    const productLatest = productService.getHomeLatest();
    const topProduct = productService.getTopProducts();
    const productRestaurant1 = productService.getRestaurantAll()
    const productRestaurant2 = productService.getRestaurantFoods();
    const productRestaurant3 = productService.getRestaurantDesserts();
    const productSupermarket1 = productService.getMarketAllProducts();
    const productSupermarket2 = productService.getMarketVegetables();
    const productSupermarket3 = productService.getMarketFruits();

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
