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


  constructor() { }

  ngOnInit(): void {
  }

}
