import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from './../../_services/user.service';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

  isAdmin$ : boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  headerAdmin:string = "Welcome to Admin Page";

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  constructor(private breakpointObserver: BreakpointObserver,
              private userService: UserService) {
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
          console.log("token:",data);
          
        }
      },
      err => {
        const error1 = JSON.parse(err.error).message;
        console.log(error1);
        this.isAdmin$ = false;
        
        
        
      }
    )
    
  }

  changeTextName(){
    this.headerAdmin = "Welcome to Admin Page";
  }


}
