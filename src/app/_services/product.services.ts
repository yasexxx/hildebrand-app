import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductServiceOperation {
    baseUrl: string;

    constructor(private http: HttpClient,
                @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl = baseUrl;
    }

    getAll(): Observable<any> {
        return this.http.get(this.baseUrl);
      }
    
      get(id): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
      } 
    
      create(data): Observable<any> {
        return this.http.post(this.baseUrl, data);
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
}