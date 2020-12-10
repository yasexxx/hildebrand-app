import { Component, Input, OnInit } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoaderService } from '../../_services/loader.service';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.scss']
})
export class ProgressLoaderComponent implements OnInit {

  @Input() loading: Observable<boolean>;
  
  loading2: Observable<boolean>;
  constructor(private router: Router,
              public loadService: LoaderService) {
    this.router.events.subscribe( 
      (event: Event) => {
        switch(true){
          case event instanceof NavigationStart:{
            this.loading2 = of(true);
            break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:{
            this.loading2 = of(false);
            break;
          }
          default: {
            break;
          }
        }
      }
    )
   }

  ngOnInit(): void {
  }

}
