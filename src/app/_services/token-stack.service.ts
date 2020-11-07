import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenStackService {
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  private _loadingLogOut$ = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(PLATFORM_ID) private platformId,
  ) {
   }

  logOut(): Observable<any> {
    if (isPlatformBrowser(this.platformId)){
      return of(1).pipe(
        tap( () => this._loadingLogOut$.next(true)),
        debounceTime(300),
        tap( () => window.sessionStorage.clear()),
        delay(1000),
        tap( () => this._loadingLogOut$.next(false))
      );
    }
  }

  public saveToken( token:string ){
    if (isPlatformBrowser(this.platformId)){
      window.sessionStorage.removeItem(this.TOKEN_KEY);
      window.sessionStorage.setItem(this.TOKEN_KEY, token);
    }
  }

  public getToken(): Observable<string> {
    if (isPlatformBrowser(this.platformId)){
      return of(sessionStorage.getItem(this.TOKEN_KEY));
    }
  }

  public getTokenDirect() {
    if (isPlatformBrowser(this.platformId)){
      return window.sessionStorage.getItem(this.TOKEN_KEY);
    }
  }

  public saveUser(user): void {
    if (isPlatformBrowser(this.platformId)){
      window.sessionStorage.removeItem(this.USER_KEY);
      window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
  }

  public getUser() {
    if (isPlatformBrowser(this.platformId)){
      return JSON.parse(sessionStorage.getItem(this.USER_KEY));
    }
  }


  get loadingLogOut$() { return this._loadingLogOut$.asObservable(); }
}
