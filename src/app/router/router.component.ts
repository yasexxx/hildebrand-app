import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from '../_services/loader.service';
import { slideInAnimation } from '../animation';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router',
  template: `
    <style>
      .hr-style{
        padding: 4.5rem 0;
      }

      .set-height-1 {
        min-height: 100vh;
      }

      @media (max-width:992px){
        .hr-style{
          padding: 7.5rem 0;
        }
      }

      @media (max-width:768px){
        .hr-style{
          padding: 6.3rem 0;
        }
      }

      @media (max-width:266px){
        .hr-style{
          padding: 6.8rem 0;
        }
      }
    </style>
      <!-- Routing Navigation : App header ,navbar, & footer -->
                <div class="fixed-top">
                  <app-header></app-header>
                  <app-navbar></app-navbar>
                  <app-progress-loader></app-progress-loader>
                </div>
                <hr class="hr-style"/>
                <div class="set-height-1" [@routeAnimations]="animateRoute(outlet)">
                  <router-outlet #outlet="outlet"></router-outlet>
                </div>
                <app-footer></app-footer>
                `,
    animations: [
      slideInAnimation
    ]
})
export class RouterComponent implements OnInit {

  loading: Observable<boolean>;

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  animateRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
