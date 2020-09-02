import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-router',
  template: `
      <!-- Routing Navigation : App header ,navbar,& footer -->
                <app-header></app-header>
                <app-navbar></app-navbar>
                <router-outlet></router-outlet>
                <app-footer></app-footer>
                
                `
})
export class RouterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
