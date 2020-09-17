import { Component, OnInit } from '@angular/core';
import { TokenStackService } from './../../_services/token-stack.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: '',
    email: '',
    address: '',
    contact: '',
    picture: "https://picsum.photos/200"
  }

  currentUser: any;

  constructor(private tokenStack: TokenStackService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStack.getUser();
    this.user.name = this.currentUser.firstname+' '+this.currentUser.lastname;
    this.user.email = this.currentUser.email;
    this.user.address = this.currentUser.address;
    this.user.contact = this.currentUser.phonenumber;
    
  }

}
