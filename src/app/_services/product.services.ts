import { Injectable, Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductServiceOperation {
    private baseUrl: string;
    private uploadUrl: string;

    constructor(private http: HttpClient,
                @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl = baseUrl+'/api/product';
        this.uploadUrl = baseUrl+'/api/upload';
    }

    getAll(): Observable<any> {
        return this.http.get(this.baseUrl);
      }
    
    get(id): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
      } 
    
    update(id, data): Observable<any> {
        return this.http.put(`${this.baseUrl}/${id}`,data);
    
      }
    
    delete(id): Observable<any> {
        return this.http.delete(this.baseUrl);
      }
    
    deleteAll(): Observable<any> {
        return this.http.delete(this.baseUrl);
      }
    
    findByTitle(title):Observable<any> {
        return this.http.get(`${this.baseUrl}?title=${title}`);
      }

    create(data): Observable<any> {
        return this.http.post<any>(this.uploadUrl+'/file', data);
      }
}