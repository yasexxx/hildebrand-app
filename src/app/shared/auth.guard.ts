import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
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
        if (url === 'admin' && isAdmin ){
            return isAdmin;
        }
        this.router.navigate(['/login']);
        return isAdmin;
    }
}
