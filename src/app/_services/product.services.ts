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
          map( (data,i) => {
                  delete data[i].createdAt;
                  delete data[i].updatedAt;
                  return data;
                  }));
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