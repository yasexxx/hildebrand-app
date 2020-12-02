import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserOrderViewComponent } from '../users/user-order/user-order-view/user-order-view.component';
import { UserOrderComponent } from '../users/user-order/user-order.component';
import { CheckOutService } from '../_services/check-out.service';
import { TokenStackService } from '../_services/token-stack.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad {

    constructor(private tokenStack: TokenStackService,
                private router: Router ){}
    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        const url  = route.path;
        const user = this.tokenStack.getUser();
        const isAdmin = user?.roles.includes('ROLE_ADMIN');
        const id = user?.id;
        if (url === 'admin' && isAdmin ){
            return isAdmin;
        } else if (url === 'user' && !!id ){
            return true;
        } else if (url === 'wishlist' && !id){
            return true;
        } else if (url === 'login' && !!id ) {
            return false;
        } else if (url === 'check-out' && !!id) {
            return true;
        }
        this.router.navigate(['/login']);
        return isAdmin;
    }
}


@Injectable()
export class AuthGuardLoginSignUp implements CanLoad {

    constructor(private tokenStack: TokenStackService,
                private router: Router ){}
    canLoad(
        route: Route
    ): Observable<boolean> | Promise<boolean> | boolean {
        const url  = route.path;
        const user = this.tokenStack.getUser();
        const id = user?.id;
         if (url === 'login' && !!id ) {
            this.router.navigate(['/']);
            return false;
        } else if (url === 'register' && !!id ){
            this.router.navigate(['/']);
            return false;
    }
    return !(!!id)
}
}


@Injectable()
export class AuthGuardActivate implements CanActivate {
    constructor(
        private router: Router,
        private tokenStack: TokenStackService
      ) {}
    
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.tokenStack.getUser();
        if (!(!!user)) {
          this.router.navigate(['/login'], {
            queryParams: { user: state.url }
          });
    
          return false;
        }
        return true;
      }
}


@Injectable(
)
export class AuthGuardActivate2 implements CanActivate {

    subscription$: Subscription;

    constructor(
        private router: Router,
        private userViewComponent: UserOrderComponent,
      ) {}
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let itemTrue: boolean;
        this.userViewComponent.ngOnInit();
        itemTrue = !!this.userViewComponent.userId;
        this.userViewComponent.ngOnDestroy();
        if (itemTrue) {
            return true;
      } else {
          this.router.navigate(['/login'])
          return false;
      }
    }
    
}
