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
                this._apiUrl = baseUrl+'/api/v1/en-PH/auth';
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
      delay(300),
      tap( () => this._loading$.next(false)),
      );
  }

  socialLogin(userInfo): Observable<any> {
    return this.http.post(`${this._apiUrl}/oath/signin`, 
    {
      firstname: userInfo.firstName,
      lastname: userInfo.lastName,
      altId: userInfo.id,
      token: {
        auth: userInfo.authToken,
        id: userInfo.idToken ? userInfo.idToken : '',
      },
      email: userInfo.email,
      photoUrl: userInfo.photoUrl,
      provider: userInfo.provider,
      terms: true
    }, {
      headers: new HttpHeaders( {'Content-Type': 'application/json' })
    });
  }

  ngOnDestroy(): void {
  }

  register(user): Observable<any> {
    return this.http.post(this._apiUrl+'/signup', {
      user
    }, {
      headers: new HttpHeaders( {'Content-Type': 'application/json' })
    });
  }

  updateUser(id, data): Observable<any> {
    let modifyData = {
      address: data.address,
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
      phoneNumber: data.phoneNumber
    }
    return this.http.put(`${this._apiUrl}/update-user/${id}`,modifyData);
  }

  updateProfilePic(id, data): Observable<any> {
    return this.http.put(`${this._apiUrl}/update-user/avatar/${id}`,data);
  }

  getUserApi(id): Observable<any> {
    return this.http.get(`${this._apiUrl}/user/${id}`);
  }

  getAvatarApi(id): Observable<any> {
    return this.http.get(`${this._apiUrl}/update-user/avatar/${id}`);
  }

  refreshToken(token, userId, tokenId): Observable<any> {
    return this.http.post(`${this._apiUrl}/refresh-token`,
     {  token: token, userId: userId, tokenId: tokenId},
     { headers: new HttpHeaders( {'Content-Type': 'application/json' })
    });
  }

  get loading$() { return this._loading$.asObservable(); }
}
