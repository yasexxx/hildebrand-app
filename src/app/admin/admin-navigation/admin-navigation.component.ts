import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  headerAdmin:string = "Welcome to Admin Page";

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  constructor(private breakpointObserver: BreakpointObserver) {}

  navigateToMenu(name:string):void{
    if (!name) return;
    else this.headerAdmin = name;
  }

  ngOnDestroy(){
    this.headerAdmin = "Welcome to Admin Page";
  }

  changeTextName(){
    this.headerAdmin = "Welcome to Admin Page";
  }


}
