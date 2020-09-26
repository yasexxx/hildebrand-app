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

  constructor() {
   }

  logOut(): Observable<any> {
    return of(1).pipe(
      tap( () => this._loadingLogOut$.next(true)),
      debounceTime(300),
      tap( () => window.sessionStorage.clear()),
      delay(1000),
      tap( () => this._loadingLogOut$.next(false))
    );
  }

  public saveToken( token:string ){
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): Observable<string> {
    return of(sessionStorage.getItem(this.TOKEN_KEY));
  }

  public getTokenDirect() {
    return window.sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(this.USER_KEY));
  }


  get loadingLogOut$() { return this._loadingLogOut$.asObservable(); }
}
