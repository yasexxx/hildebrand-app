import { ProductInfo } from './update-product.service';
import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductServiceOperation {
    private baseUrl: string;

    constructor(private http: HttpClient,
                @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl = baseUrl+'/api/products/authen/access-token/private/&leaked=primary';
    }

    getAll(): Observable<any> {
        return this.http.get(this.baseUrl).pipe(
          map( (data) => {
                  for (const i in data) {
                    if (Object.prototype.hasOwnProperty.call(data, i)) {
                      const modData = data[i];
                      if (modData.isPublished === true){
                        modData.isPublished = 'Published'
                      }
                      if(!!modData.post){
                        if (modData.post.topProduct === true ){
                          modData.post.topProduct = 'Top Product';
                        } if ( modData.post.featuredProduct === true ){
                          modData.post.featuredProduct = 'Featured Product';
                        } if ( modData.post.latestProduct === true ){
                          modData.post.latestProduct = 'Latest Product';
                        } if ( modData.post.restaurantProduct === true ){
                          modData.post.restaurantProduct = 'Restaurant Product';
                        } if ( modData.post.supermarketProduct === true ){
                          modData.post.supermarketProduct = 'Supermarket Product';
                        } if ( modData.post.other === true){
                          modData.post.other = 'Other';
                        }
                      }
                      if (!!modData.options){
                        if (modData.options.restaurantFood === true ){
                          modData.options.restaurantFood = 'Restaurant Food';
                        } if ( modData.options.restaurantDrink === true ){
                          modData.options.restaurantDrink = 'Restaurant Drink';
                        } if ( modData.options.restaurantDessert === true ){
                          modData.options.restaurantDessert = 'Restaurant Dessert';
                        } if ( modData.options.supermarketGrocery === true ){
                          modData.options.supermarketGrocery = 'Supermarket Grocery';
                        } if ( modData.options.supermarketVegetable === true ){
                          modData.options.supermarketVegetable = 'Supermarket Vegetable';
                        } if ( modData.options.supermarketCannedGoods === true){
                          modData.options.supermarketCannedGoods = 'Supermarket Canned Goods';
                        }}}}
                  return data;
                  }));
    }

    getTopProduct(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/top-products');
    }

    getFeaturedProduct(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/featured-products');
    }

    getLatestProduct(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/latest-products');
    }

    getSupermarketProduct(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/supermarket-products');
    }

    getRestaurantProduct(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/restaurant-products');
    }
    
    getOtherProduct(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/other-products');
    }

    getRestaurantFood(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/restaurant-products/food');
    }

    getRestaurantDrink(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/restaurant-products/drink');
    }

    getRestaurantDessert(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/restaurant-products/dessert');
    }

    getSupermarketGrocery(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/supermarket-products/grocery');
    }

    getSupermarketVegetable(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/supermarket-products/vegetable');
    }

    getSupermarketCannedGoods(): Observable<any> {
      return this.http.get(this.baseUrl+'/display/supermarket-products/canned-goods');
    }

    get(id): Observable<any> {
        return this.http.get<ProductInfo>(`${this.baseUrl}/${id}`);
      } 
    
    update(id, data): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`,data);
    
      }
    
    delete(id): Observable<any> {
        return this.http.delete(this.baseUrl+`/${id}`);
      }
    
    deleteAll(): Observable<any> {
        return this.http.delete(this.baseUrl);
      }
    
    findByTitle(name):Observable<any> {
        return this.http.get(`${this.baseUrl}?productName=${name}`);
      }

    create(data): Observable<any> {
        return this.http.post<any>(this.baseUrl, data);
      }

    
}