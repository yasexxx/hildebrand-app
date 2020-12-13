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

    constructor(private token: TokenStackService,
                @Inject('BASE_URL') private baseUrl){ }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authenReq = req;
        const mainSite = (authenReq.url).includes(this.baseUrl);
  
        
        const token = this.token.getTokenDirect();
        if (token !== null && mainSite){
            authenReq = req.clone( { headers: req.headers.set(this.TOKEN_HEADER_KEY, 'Bearer ' + token)});
        }
        
        return next.handle(authenReq);
    }

}
