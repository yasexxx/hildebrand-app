import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  siteTitle = 'Dei Joseeli';
  constructor(@Inject(PLATFORM_ID) private platformId:string) { }

  ngOnInit(): void {
  }

  returnHome(){
    if(isPlatformBrowser(this.platformId)){
      window.scrollTo(0,0);
    }
  }

}
