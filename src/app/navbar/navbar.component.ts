import { Component, OnInit } from '@angular/core';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	title= "SL MALL";
  moneyBillWaveAlt = faMoneyBillWaveAlt;
  collapsed = true;

  isHover = false;

  constructor() { }

  mouseOver() {
    if (this.isHover === false){
      this.isHover = true;
  }
  }

  mouseOut() {
    if (this.isHover === true){
      this.isHover = false;
    }
  }

  collapsedActivate() {
    if(this.collapsed === false){
      this.collapsed = true;
    }
  }

  ngOnInit(): void {
  }

}
