import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()

export class NavService {
    // Observable sources

    private navLoginSource = new BehaviorSubject<boolean>(false);
    private navCartSource = new BehaviorSubject<number>(0);
    private routeNewProduct  = new BehaviorSubject<boolean>(false);


    // Observable streams

    navLogin$ = this.navLoginSource.asObservable();
    navCart$ = this.navCartSource.asObservable();
    routeNew$ = this.routeNewProduct.asObservable();

    // service functions

     changeNav(isTrue) {
         this.navLoginSource.next(isTrue);
     }

     changeCart(value) {
         this.navCartSource.next(value);
     }

     newRoute(isTrue) {
         this.routeNewProduct.next(isTrue);
     }

}
