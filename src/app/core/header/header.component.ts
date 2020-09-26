import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { TokenStackService } from './../../_services/token-stack.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  subscription$ : Subscription;
  subscription2$ : Subscription;


  private roles: string[];

  isAdmin$: boolean = false;

  isLoggedIn: boolean;

  isLoading: Observable<boolean> = this.tokenStack.loadingLogOut$;

  id: string;
  userName:string;
  isHover: boolean = false;
  constructor(private tokenStack: TokenStackService,
              private router: Router) { }

  ngOnInit(): void {
    this.subscription$ = this.tokenStack.getToken().subscribe(
      str => {
        this.isLoggedIn = !!(str);
        if (this.isLoggedIn) {
          const user = this.tokenStack.getUser();
          this.roles = user.roles;
          this.isAdmin$ = this.roles.includes('ROLE_ADMIN');
          this.userName = user.username;
          this.id = user.id;
        }
      },
       err => {
         console.log('error: ',err);
         
       }
    );
  }

  ngOnDestroy(): void {
    if(this.subscription$) { this.subscription$.unsubscribe(); }
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
  }

  mouseOver() {
    if (this.isHover === false){
      this.isHover = true;
  }
  }

  mouseOut() {
    if (this.isHover === true){
      this.isHover = false;
    }
  }

  viewProfile() {
    this.router.navigate(['user']);
  }

  goToAdmin(){
    this.router.navigate(['/admin'])
  }

  

  logout(): void {
    this.subscription2$ = this.tokenStack.logOut().subscribe(
      data => {
        if(data){
          this.router.navigateByUrl('**', { skipLocationChange: true}).then( () =>
          this.router.navigate([''])
          );
        }
      }
    );
  }
  

}
