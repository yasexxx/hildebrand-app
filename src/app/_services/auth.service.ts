import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, defer, from, Observable, of, Subscription, throwError } from 'rxjs';
import { catchError, debounceTime, delay, map, retryWhen, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {
  private _apiUrl:string;

  private _loading$ = new BehaviorSubject<boolean>(false);


  constructor(@Inject('BASE_URL') baseUrl: string,
              private http: HttpClient) { 
                this._apiUrl = baseUrl+'/api/auth'
              }

  login(credentials): Observable<any>{
    this._loading$.next(true);
      return this.http.post(`${this._apiUrl}/signin`, {
        username: credentials.username,
        password: credentials.password
      }, httpOptions)
      .pipe(
      catchError( err => { 
          return of(err);
         }),
      debounceTime(200),
      delay(1000), 
      tap( () => this._loading$.next(false)),
      );
  }




  ngOnDestroy(): void {
    
  }

  register(user): Observable<any> {
    return this.http.post(this._apiUrl+'/signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address,
      phoneNumber: user.phoneNumber
    }, httpOptions);
  }

  get loading$() { return this._loading$.asObservable(); }
}
