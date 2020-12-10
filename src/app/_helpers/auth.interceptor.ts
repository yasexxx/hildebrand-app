import { Inject, Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS
} from '@angular/common/http';

import { TokenStackService } from './../_services/token-stack.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {


    private TOKEN_HEADER_KEY = 'x-access-token';

    private MAIN_SITE_HEADER = 'TechnoDget-Header'

    private MAIN_SITE_KEY = 'TECHNO:2A472D4B6150645367566B5970337336'

    constructor(private token: TokenStackService,
                @Inject('BASE_URL') private baseUrl){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authenReq = req;
        const mainSite = (authenReq.url).includes(this.baseUrl);
        
        if (mainSite){
            authenReq = req.clone( { headers: req.headers.set(this.MAIN_SITE_HEADER, this.MAIN_SITE_KEY)});
        }
        
        const token = this.token.getTokenDirect();
        if (token !== null && mainSite){
            authenReq = req.clone( { headers: req.headers.set(this.TOKEN_HEADER_KEY, 'Bearer ' + token)
            .set( this.MAIN_SITE_HEADER, this.MAIN_SITE_KEY)});
        }
        return next.handle(authenReq);
    }

}
