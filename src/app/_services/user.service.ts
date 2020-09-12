import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl:string;
  private responseType:object = {responseType: 'text'};

  constructor(private http: HttpClient,
              @Inject('BASE_URL') baseUrl:string) { 
                this.apiUrl =  baseUrl+'/api/test';
              }

  getPublicContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`, this.responseType);
  }

  getUserBoard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`, this.responseType )
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.apiUrl+'/mod', this.responseType );
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.apiUrl+ '/admin', this.responseType );
  }


}
