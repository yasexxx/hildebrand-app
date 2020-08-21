import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: "Elijah Marie Ligtas",
    email: "elijah_mary@gmail.com",
    address: "Sogod Southern Leyte",
    contact: "09066133963",
    picture: "https://picsum.photos/200"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
