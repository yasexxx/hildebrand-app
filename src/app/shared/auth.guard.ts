import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
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
        } else if (url === 'cart' && !!id ){
            return true;
        } else if (url === 'wishlist' && !id){
            return true;
        }

        this.router.navigate(['/login']);
        return isAdmin;
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
