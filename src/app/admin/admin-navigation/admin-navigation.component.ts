import { Router } from '@angular/router';
import { TokenStackService } from './../../_services/token-stack.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from './../../_services/user.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit, OnDestroy {

  isAdmin$ : boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  headerAdmin:string = "Welcome to Admin Page";

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];
  private _subscription$: Subscription;

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService,
              private tokenStackService: TokenStackService,
              private router: Router) {
  }

  navigateToMenu(name:string):void{
    if (!name) return;
    else this.headerAdmin = name;
  }

  ngOnInit(): void {
    this.headerAdmin = "Welcome to Admin Page";
    this.userService.getAdminBoard().subscribe(
      data => {
        if (data) {
          this.isAdmin$ = true;
        }
      },
      err => {
        const error1 = JSON.parse(err.error).message;
        console.log(error1);
        this.isAdmin$ = false;
      }
    );
  }

  ngOnDestroy():void {
    if(this._subscription$) { this._subscription$.unsubscribe();}
  }


  changeTextName(){
    this.headerAdmin = "Welcome to Admin Page";
  }

  logout() {
    this._subscription$ = this.tokenStackService.logOut()
    .subscribe(
      data => {
        if(data){
          this.router.navigateByUrl('**', { skipLocationChange: true}).then(
          () => { this.router.navigate(['/home']);}
          )
        }
      }, err=> {console.log(err);
      }
    )
  }


}
