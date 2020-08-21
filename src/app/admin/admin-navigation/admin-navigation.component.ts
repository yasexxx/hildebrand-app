import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-admin-navigation',
  templateUrl: './admin-navigation.component.html',
  styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  headerAdmin = [];

  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  constructor(private breakpointObserver: BreakpointObserver) {}

  navigateToMenu(name):void{
    const getMenu = this.menuItems.filter( item$ => name===item$)
    this.headerAdmin = getMenu;
    console.log(getMenu);
    };
  }
