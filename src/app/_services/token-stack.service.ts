import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStackService {
  private TOKEN_KEY = 'auth-token';
  private USER_KEY = 'auth-user';

  constructor() { }

  logOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken( token:string ){
    window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveUser(user): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(this.USER_KEY));
  }
}
