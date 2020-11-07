import { isPlatformBrowser } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';
import { Observable, Subscription } from 'rxjs';
import { NavService } from '../shared/nav.service';
import { TokenStackService } from './../_services/token-stack.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoading: Observable<boolean> = this.tokenStack.loadingLogOut$;

  title = 'dei joseeli';
  moneyBillWaveAlt = faMoneyBillWaveAlt;
  collapsed = true;
  isHover = false;
  isHover2 = false;
  isLoggedIn = false;
  userName = '';
  badgeNumber = 1;
  totalInCart = 10000;
  hideBadge = true;
  subscription$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  roles;
  isAdmin$: boolean;
  cart = 0;

  constructor(private tokenStack: TokenStackService,
              private router: Router,
              private navService: NavService,
              @Inject(PLATFORM_ID) private platformId ) {
               }

  mouseOver(): void {
    if (this.isHover === false){
      this.isHover = true;
  }
  }

  mouseOut(): void {
    if (this.isHover === true){
      this.isHover = false;
    }
  }

  mouseOver2(): void {
    if (this.isHover2 === false){
      this.isHover2 = true;
  }
  }

  mouseOut2(): void {
    if (this.isHover2 === true){
      this.isHover2 = false;
    }
  }

  collapsedActivate(): void {
    if (this.collapsed === false){
      this.collapsed = true;
    }
  }

  logout(): void {
    if ( isPlatformBrowser(this.platformId)){
      this.subscription2$ = this.tokenStack.logOut().subscribe(
        data => {
          if (data){
            this.router.navigateByUrl('/admin', { skipLocationChange: true}).then( () =>
            this.router.navigate([''])
            );
          }
        }
      );
    }
  }

  navigateAdmin(): void{
    this.router.navigate(['/admin']);
  }

  subCart(): void {
    this.subscription3$ = this.navService.navCart$.subscribe(
      value => {
        this.cart = value;
        if (this.cart > 0) {
          this.hideBadge = false;
        } else {this.hideBadge = true; }
      }, err => {
        console.log(err);
      }

    );
  }

  subUser(): void {
    if ( isPlatformBrowser(this.platformId)){
      this.subscription$ = this.tokenStack.getToken().subscribe(
        str => {
          this.isLoggedIn = !!(str);
          if (this.isLoggedIn) {
            const user = this.tokenStack.getUser();
            this.roles = user.roles;
            this.isAdmin$ = this.roles.includes('ROLE_ADMIN');
            this.userName = user.username;
          }
        },
         err => {
           console.log('error: ', err);
         }
      );
    }
  }

  ngOnInit(): void {
    this.subUser();
    this.subCart();
  }

  ngOnDestroy(): void {
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
    if (this.subscription$) { this.subscription$.unsubscribe(); }
    if (this.subscription3$) { this.subscription3$.unsubscribe(); }
  }


}
