import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    signupForm = new FormGroup({
    username : new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormControl(''),
    phoneNummber : new FormControl('')
  });

  form: any = {};
  isSucessful = false;
  isRegisterFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSucessful = true;
        this.isRegisterFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isRegisterFailed = true;
      }
    )
  }

}
