import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  subscription$: Subscription;
  url: string;

  constructor(private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription$ = this.route.url.subscribe(
      url => {
        this.url = url[0].path;
        const fakeUrl = this.url;
        if (fakeUrl.includes(' ')){
          const urlArr = fakeUrl.split(' ');
          this.url = '';
          const len = urlArr.length;
          urlArr.forEach((element,i) => {
            if (len-1 !== i){
              this.url += element+'%20';
            }
            if (len-1 === i){
              this.url += element;
            }
            
          });
          
        }
      }
    )
  }

  ngOnDestroy(): void {
    if(this.subscription$){
      this.subscription$.unsubscribe();
    }
  }

}
