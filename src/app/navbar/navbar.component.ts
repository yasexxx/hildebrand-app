import { Component, OnInit } from '@angular/core';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	title= "dei joseeli";
  moneyBillWaveAlt = faMoneyBillWaveAlt;
  collapsed: boolean = true;

  isHover:boolean = false;

  isHover2: boolean = false;

  isNotLogin: boolean = true;

  userName: string = 'joey'

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

  mouseOver2() {
    if (this.isHover2 === false){
      this.isHover2 = true;
  }
  }

  mouseOut2() {
    if (this.isHover2 === true){
      this.isHover2 = false;
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
