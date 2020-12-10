import { Injectable } from '@angular/core';
import {
    HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { TokenStackService } from '../_services/token-stack.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RefreshTokenInterceptor implements HttpInterceptor {

    newToken: string;
    processOne = true;

    noTokenFound = 'No token match found!';

    noTokenFound2 = 'No token provided!';

    constructor(private authService: AuthService,
                private router: Router,
                private tokenService: TokenStackService ){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return next.handle(req).pipe(
            catchError( err => {
                if( err instanceof HttpErrorResponse && err.status === 401 && this.processOne){
                    this.processOne = false;
                    const oldToken = this.tokenService.getTokenDirect();
                    let user = this.tokenService.getUser();
                    const userId = user.id;
                    const tokenId = user.tokenId;
                    if (!!oldToken){
                        const subs = this.authService.refreshToken(oldToken, userId, tokenId).subscribe(
                            res => {
                                this.newToken = res.refreshToken;
                                this.tokenService.saveToken(this.newToken);
                                user.tokenId = res.tokenId;
                                this.tokenService.saveUser(user);
                                this.processOne = true;
                            }, err1 => { 
                                this.processOne = true;
                            }, () => { subs.unsubscribe();
                                this.router.navigateByUrl('**', { skipLocationChange: true}).then( () =>
                                this.router.navigate([''])
                                );}
                        )
                    }
                }

                if ( err instanceof HttpErrorResponse && err.status === 404 ){
                    if (err.error.message === this.noTokenFound || err.error.message === this.noTokenFound2){
                        this.tokenService.fastLogOut();
                    }
                }
                
                return throwError(err);
            })
        )
    }
}