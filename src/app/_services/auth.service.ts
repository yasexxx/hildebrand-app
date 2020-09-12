import { Injectable, Inject } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _apiUrl:string;


  constructor(@Inject('BASE_URL') baseUrl: string,
              private http: HttpClient) { 
                this._apiUrl = baseUrl+'api/auth'
              }

  login(credentials): Observable<any>{
    return this.http.post(`${this._apiUrl}/login`, {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(this._apiUrl+'signup', {
      username: user.name,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
