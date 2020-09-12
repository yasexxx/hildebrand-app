import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

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
