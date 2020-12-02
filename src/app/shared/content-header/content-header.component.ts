import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-header',
  template: `
  <div [ngStyle]="backgroundStyle">
    <div [ngStyle]="textStyle">
      <h1>{{headerTitle}}</h1>
    </div>
  </div>
  `
})

export class ContentHeaderComponent implements OnInit {

  @Input() headerTitle = 'Insert text here';
  @Input() background = '#002447';
  @Input() textColor = 'white';
  @Input() fontWeight: 'normal';
  @Input() size: number;

  backgroundStyle : object;
  textStyle: object;

  constructor() {
   }

  ngOnInit(): void {
    this.backgroundStyle = {'background': this.background };
    this.textStyle = { 'font-weight': this.fontWeight,
                        'padding': '2rem 0',
                        'text-align': 'center',
                        'color': this.textColor,
                        'font-size.rem': this.size
                      };
  }

}
