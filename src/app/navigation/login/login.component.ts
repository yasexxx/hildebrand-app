import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './../../_services/auth.service';
import { TokenStackService } from './../../_services/token-stack.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from './../../core/header/header.component';
import { Observable, Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { SocialAuthService } from 'angularx-social-login';
import { FacebookLoginProvider , GoogleLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    HeaderComponent
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  isLoggedIn = false;
  isLoggedFailed = false;
  errorMessage = '';
  roles: string[];
  user: SocialUser;

  loggedIn: boolean;

  isLoading: Observable<boolean> = this.authService.loading$;

  subscription$: Subscription;

  subscription2$: Subscription;

  subscription3$: Subscription;

  subscription4$: Subscription;

  constructor(private authService: AuthService,
              private oAuthService: SocialAuthService,
              private tokenStack: TokenStackService,
              private fb: FormBuilder,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId) {
               }

  ngOnInit(): void {
    this.subscription3$ = this.oAuthService.authState.subscribe(
      user => {
        this.user = user;
        this.loggedIn = (user != null);
        if (this.loggedIn){
          this.checkOauthApi(this.user);
        }
      }
    )
    if (isPlatformBrowser(this.platformId)){
      this.subscription$ = this.tokenStack.getToken()
      .subscribe( str => {
        if (str){
          this.isLoggedIn = true;
          this.roles = this.tokenStack.getUser().roles;
        }
      });
    }
  }
  ngOnDestroy(): void {
    if (this.subscription$) {this.subscription$.unsubscribe(); }
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
    if (this.subscription3$) { this.subscription3$.unsubscribe(); }
    if (this.subscription4$) { this.subscription4$.unsubscribe(); }
    this.authService.ngOnDestroy();
  }


  checkOauthApi(user): void {
    this.subscription4$ = this.authService.socialLogin(user)
      .subscribe( res => {
        this.tokenStack.saveToken(res.accessToken);
        this.tokenStack.saveUser(res);
        this.isLoggedFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStack.getUser().roles;
        this.reloadPage();
      }, err => {
        console.log(err);
      })
  }


  onSubmit(): void {
    if (isPlatformBrowser(this.platformId)){
      this.subscription2$ = this.authService.login(this.loginForm.value).subscribe(
        data => {
          if (!!data.accessToken){
            this.tokenStack.saveToken(data.accessToken);
            this.tokenStack.saveUser(data);
            this.isLoggedFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStack.getUser().roles;
            this.reloadPage();
          } else {
          this.isLoggedFailed = true;
          console.log(data);
          if (!!data.error.message){
            this.errorMessage = data.error.message;
          } else{
            this.errorMessage = data.statusText;
          }
          }
        },
        err => {
          console.log('error: ', err);
        }
      );
    }
  }

  reloadPage(){
    this.router.navigateByUrl('**', { skipLocationChange: true}).then( () => {
      this.router.navigate(['']);
    });
  }

  signInWithGoogle(): void {
    this.oAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFb(): void {
    this.oAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }


}
