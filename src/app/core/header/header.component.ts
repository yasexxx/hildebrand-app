import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../../_services/cart.service';
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
              private router: Router,
              private cartService: CartService,
              @Inject(PLATFORM_ID) private platformId) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)){
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

  viewCart() {
    this.router.navigate(['/cart']);
  }

  viewOrder() {
    this.router.navigate(['user/order']);
  }

  goToAdmin(){
    this.router.navigate(['/admin'])
  }

  

  logout(): void {
    if (isPlatformBrowser(this.platformId)){
      this.subscription2$ = this.tokenStack.logOut().subscribe(
        data => {
          if(data){
            this.router.navigateByUrl('**', { skipLocationChange: true}).then( () =>
            this.router.navigate([''])
            );
          this.cartService.clearCartLoc();
          }
        }
      );
    }
    }
}
