import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import {  BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenStackService {
  private TOKEN_KEY = 'csat';
  private USER_KEY = 'cl';
  private REFRESH_TOKEN_KEY = 'csrt';

  // tslint:disable-next-line: variable-name
  private _loadingLogOut$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private oauthService: SocialAuthService,
    private router: Router
  ) {
   }

  logOut(): Observable<any> {
    if (isPlatformBrowser(this.platformId)){
      return of(1).pipe(
        tap( () => this._loadingLogOut$.next(true)),
        debounceTime(300),
        tap( () => {
          window.sessionStorage.clear();
          window.localStorage.clear();
          this.oauthService.signOut()
            .then( res => { res }).catch(
              err => {err;}
            )
            }),
        delay(500),
        tap( () => {this._loadingLogOut$.next(false);
          this.router.navigateByUrl('**', { skipLocationChange: true}).then( () =>
          this.router.navigate([''])
          );})
      );
    }
  }

  fastLogOut(): void {
    if (isPlatformBrowser(this.platformId)){
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.oauthService.signOut()
        .then( res => { res }).catch(
          err => {err;}
        );
      this.router.navigateByUrl('**', { skipLocationChange: true}).then( () =>
      this.router.navigate([''])
      );
    }
  }

  saveToken(token: string ): void{
    if (isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.TOKEN_KEY);
      window.localStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  saveRefreshToken(refreshToken: string): void {
    if(isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.REFRESH_TOKEN_KEY);
      window.localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
    }
  }

  getToken(): Observable<string> {
    if (isPlatformBrowser(this.platformId)){
      return of(localStorage.getItem(this.TOKEN_KEY));
    }
  }

  getRefreshToken() {
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem(this.REFRESH_TOKEN_KEY);
    }
  }

  getTokenDirect(){
    if (isPlatformBrowser(this.platformId)){
      return window.localStorage.getItem(this.TOKEN_KEY);
    }
  }

  saveUser(user): void {
    if (isPlatformBrowser(this.platformId)){
      window.localStorage.removeItem(this.USER_KEY);
      window.localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  getUser() {
    if (isPlatformBrowser(this.platformId)){
      return JSON.parse(localStorage.getItem(this.USER_KEY));
    }
  }

  get loadingLogOut$(): Observable<boolean> { return this._loadingLogOut$.asObservable(); }
}
