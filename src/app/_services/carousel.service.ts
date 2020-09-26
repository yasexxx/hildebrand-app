import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CarouselService {
    private baseUrl: string;

    constructor(private http: HttpClient,
                @Inject('BASE_URL') baseUrl: string
    ){
        this.baseUrl = baseUrl+'/api/v1';
    }

    getAll(): Observable<any> {
        return this.http.get(this.baseUrl+'/carousel');
    }

    createCarousel(data):Observable<any> {
        return this.http.post(this.baseUrl+'/carousel', data);
    }

    updateCarousel(id, data): Observable<any> {
        return this.http.put(`${this.baseUrl}/carousel/${id}`,data);
    
      }

    getCarousels(id): Observable<any> {
        return this.http.get(`${this.baseUrl}/carousel/${id}`);
    }

    
}