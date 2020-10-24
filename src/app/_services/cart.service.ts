import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(http: HttpClient){}

    addToCart(qty, product) {

    }

}