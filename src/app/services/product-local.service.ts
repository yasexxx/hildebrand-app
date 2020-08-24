import { Injectable } from '@angular/core';
import { NewProductsDetails,  ProductsDetails, ProductSpecialItems, DisplayCarouselImage} from './../services/products-details';



@Injectable({
  providedIn: 'root'
})

export class ProductLocalService {

  constructor() { }

  getHomeFeature() {
	  const featuredProducts = NewProductsDetails.filter( feature => feature.insert === "home" && feature.type === "feature");
	  return featuredProducts;
  }

  getHomeLatest() {
	  const latestProducts = NewProductsDetails.filter( latest => latest.insert === "home" && latest.type === "latest");
	  return latestProducts;
  }

  getTopProducts() {
	  const topProducts = NewProductsDetails.filter( top => top.insert === "home" && top.type === "top");
	  return topProducts;
  }

  getMarketAllProducts() {
	  const allProducts = ProductsDetails.filter( supermarket => supermarket.insert === "supermarket" && supermarket.type === "all");
	  return allProducts;
  }

  getMarketVegetables() {
	  const vegetableProducts = ProductsDetails.filter( vegetable => vegetable.insert === "supermarket" && vegetable.type === "vegetable");
	  return vegetableProducts;
  }

  getMarketFruits() {
	  const fruitProducts = ProductsDetails.filter( fruit => fruit.insert === "supermarket" && fruit.type === "fruits");
	  return fruitProducts;
	}

  getRestaurantAll() {
	  const allProducts = ProductsDetails.filter ( restaurant => restaurant.insert === "restaurant" && restaurant.type === "all");
	  return allProducts;
  }

  getRestaurantFoods() {
	  const foodProducts = ProductsDetails.filter ( food => food.insert === "restaurant" && food.type === "food");
	  return foodProducts;
  }

  getRestaurantDesserts() {
	  const dessertProducts = ProductsDetails.filter( dessert => dessert.insert === "restaurant" && dessert.type === "desserts");
	  return dessertProducts;
  }

  getSpecialItems() {
	  let specialItems = ProductSpecialItems.filter ( special => special.insert === "unknown" && special.type ==="none")
	  .forEach( special => special.type = "special");
	  return specialItems;
  }

  getDisplayCarousel() {
	  return DisplayCarouselImage;
  }

}
