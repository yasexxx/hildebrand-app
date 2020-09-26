import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './../../_services/auth.service';
import { TokenStackService } from './../../_services/token-stack.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from './../../core/header/header.component';
import { Observable, Subscription } from 'rxjs';

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
  })

  isLoggedIn = false;
  isLoggedFailed = false;
  errorMessage = '';
  roles: string[];

  isLoading :Observable<boolean> = this.authService.loading$;

  subscription$ : Subscription;

  subscription2$ : Subscription;

  constructor(private authService: AuthService,
              private tokenStack: TokenStackService,
              private fb: FormBuilder,
              private router: Router ) {
               }

  ngOnInit(): void {

    this.subscription$ = this.tokenStack.getToken()
    .subscribe( str => {
      if(str){
        this.isLoggedIn = true;
        this.roles = this.tokenStack.getUser().roles;
      }
    })

  }
  ngOnDestroy(): void {
    if(this.subscription$) {this.subscription$.unsubscribe(); }
    if(this.subscription2$) { this.subscription2$.unsubscribe(); }
    this.authService.ngOnDestroy();
  }


  onSubmit(): void {
    this.subscription2$ = this.authService.login(this.loginForm.value).subscribe(
      data => {
        if(!!data.accessToken){
          this.tokenStack.saveToken(data.accessToken);
          this.tokenStack.saveUser(data);
          this.isLoggedFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStack.getUser().roles;
          this.reloadPage();
        } else {
        this.isLoggedFailed = true;
        console.log(data);
        if(!!data.error.message){
          this.errorMessage = data.error.message;
        } else{
           
          this.errorMessage = data.statusText;
        }


      
        }
      },
      err => {
        console.log("error: ",err);
        


      }
    );
  }

  reloadPage(){
    this.router.navigateByUrl('/admin', { skipLocationChange: true}).then( () => {
      this.router.navigate(['']);
    });
  }

  get username() { return this.loginForm.get('username') }

  get password() { return this.loginForm.get('password') }


}
