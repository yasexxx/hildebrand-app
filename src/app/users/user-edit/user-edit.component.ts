import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  username = 'datebaiyo';

  user = {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phoneNumber: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('event');
    
  }

}
