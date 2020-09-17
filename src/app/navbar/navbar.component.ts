import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';
import { Observable, Subscription } from 'rxjs';
import { TokenStackService } from './../_services/token-stack.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoading: Observable<boolean> = this.tokenStack.loadingLogOut$;
  
  title= "dei joseeli";
  moneyBillWaveAlt = faMoneyBillWaveAlt;
  collapsed: boolean = true;
  isHover:boolean = false;
  isHover2: boolean = false;
  isLoggedIn: boolean = false;
  userName: string = ''
  badgeNumber: number = 10;
  totalInCart:number = 10000;
  hideBadge: boolean = true;
  subscription$ : Subscription;
  subscription2$ : Subscription;
  roles;
  isAdmin$: boolean;

  constructor(private tokenStack: TokenStackService,
              private router: Router) { }

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

  mouseOver2() {
    if (this.isHover2 === false){
      this.isHover2 = true;
  }
  }

  mouseOut2() {
    if (this.isHover2 === true){
      this.isHover2 = false;
    }
  }

  collapsedActivate() {
    if(this.collapsed === false){
      this.collapsed = true;
    }
  }

  logout(): void {
    this.subscription2$ = this.tokenStack.logOut().subscribe(
      data => {
        if(data){
          this.router.navigateByUrl('/admin', { skipLocationChange: true}).then( () =>
          this.router.navigate([''])
          );
        }
      }
    );
  }

  ngOnInit(): void {
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
         console.log('error: ',err);
         
       }
    );
  }

  ngOnDestroy(): void {
    if(this.subscription2$) { this.subscription2$.unsubscribe(); }
    if(this.subscription$) { this.subscription$.unsubscribe(); }
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

}
