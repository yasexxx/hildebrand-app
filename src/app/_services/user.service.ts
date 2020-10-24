import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavService } from '../shared/nav.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl:string;

  cart: number;

  constructor(private http: HttpClient,
              private navService : NavService,
              @Inject('BASE_URL') baseUrl:string) { 
                this.apiUrl =  baseUrl+'/api/test';
              }

  getPublicContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`, {responseType: 'text'});
  }

  getUserBoard(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`, {responseType: 'text'} )
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.apiUrl+'/mod', {responseType: 'text'} );
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.apiUrl+ '/admin', {responseType: 'text'} );
  }

  setCart(cart: number){
    this.cart = cart;
    this.navService.changeNav(true);
    this.navService.changeCart(this.cart);
  }

  clearUser() {
    this.cart = null;
    this.navService.changeNav(false);
  }




}
