import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- <router-outlet></router-outlet> -->
              <app-product></app-product>`
})
export class AppComponent {

  constructor() {}

  isRoutingNotActivate: boolean = true;


}
