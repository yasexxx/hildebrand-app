import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, debounceTime, delay, tap } from 'rxjs/operators';



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
      }, {
        headers: new HttpHeaders( {'Content-Type': 'application/json' })
      })
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
    console.log(user);
    
    return this.http.post(this._apiUrl+'/signup', {
      user
    },{
      headers: new HttpHeaders( {'Content-Type': 'application/json' })
    });
  }

  updateUser(id, data): Observable<any> {
    return this.http.post(`${this._apiUrl}/update-user/${id}`,data);
  }

  get loading$() { return this._loading$.asObservable(); }
}
