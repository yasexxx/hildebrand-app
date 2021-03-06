import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from '../../_services/loader.service';
import { Observable, of, Subscription } from 'rxjs';



export const accountValidationMessages = {
  'username': [
    { type: 'required', message: 'Username is required' },
    { type: 'minlength', message: 'Username must be at least 5 characters long' },
    { type: 'maxlength', message: 'Username cannot be more than 20 characters long' },
    { type: 'pattern', message: 'Your username must contain only numbers and letters' },
  ],
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ],
  'confirmPass': [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'mismatch', message: 'Password don\'t match' }
  ],
  'password': [
    { type: 'required', message: 'Password is required' },
    { type: 'minlength', message: 'Password must be at least 7 characters long' },
    { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  ],
  'terms': [
    { type: 'required', message: 'You must accept terms and conditions' }
  ],
  'firstname': [
    { type: 'required', message: 'First Name is required'},
    { type: 'minlength', message: 'First Name must be at least 3 characters long' },
    { type: 'maxlength', message: 'First Name cannot be more than 25 characters long' }
  ],
  'lastname': [
    { type: 'required', message: 'Last Name is required'},
    { type: 'minlength', message: 'Last Name must be at least 3 characters long' },
    { type: 'maxlength', message: 'Last Name cannot be more than 25 characters long' }
  ],
  'address': [
    { type: 'required', message: 'Address is required'},
    { type: 'pattern', message:'Your address is invalid'}
  ],
  'phonenumber': [
    { type: 'required', message: 'Phone Number is required'},
    { type: 'validatePhoneNumber', message:'Phone number is invalid'}
  ]
  };

const emailPattern = Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');
const userPattern = Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$');
const addressPattern = Validators.pattern('^[a-zA-Z0-9,. ]+$');


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  accountValidationMessages$ = accountValidationMessages;

  signupForm:FormGroup = this.fb.group ({
    username : ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20),userPattern])],
    firstname : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    email: ['', Validators.compose([Validators.required,emailPattern ])],
    passwordGroup: this.fb.group({
      password: ['', Validators.compose([Validators.required,Validators.minLength(7)])],
      confirmPass: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator }),
    address: ['', Validators.compose([Validators.required, addressPattern ])],
    phoneNumber : [''],
    terms : ['', [Validators.requiredTrue]]
  });


  isSuccessful = false;
  isRegisterFailed = false;
  errorMessage = '';
  isLoading: boolean;
  subscription$ : Subscription;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private loadService: LoaderService ) {
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscription$) { this.subscription$.unsubscribe();}
  }

  onSubmit(): void {
    this.isLoading = true;
    const phone$ = this.phoneNumber.value;
    const formData = {
      username: this.username.value,
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      address: this.address.value,
      password: this.password.value,
      phoneNumber: phone$?.nationalNumber,
      terms: this.terms.value
    };
    this.subscription$ = this.authService.register(formData).subscribe(
      data => {
        this.isSuccessful = true;
        this.isRegisterFailed = false;
        this.isLoading = false;
      },
      err => {
        this.isRegisterFailed = true
        this.isLoading = false;
        if(!!err.error.message){
          this.errorMessage = err.error.message;
          this.errorMessage = JSON.stringify(this.errorMessage);
        } else { this.errorMessage = err.statusText || 'Cannot Sign-up, Check your connection!' ;}
      }
    )
  }

  passwordMatchValidator(control: AbstractControl) {
    const v1 = control.value.password;
    const v2 = control.value.confirmPass;
    const result = v1 ===  v2 ? null : { mismatch : true} ;
    return result;
    }


  get username() { return this.signupForm.get('username'); }

  get firstname() { return this.signupForm.get('firstname'); }

  get lastname() { return this.signupForm.get('lastname'); }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('passwordGroup.password'); }

  get confirmPass() { return this.signupForm.get('passwordGroup.confirmPass'); }

  get address() { return this.signupForm.get('address'); }

  get phoneNumber() { return this.signupForm.get('phoneNumber'); }

  get terms() { return this.signupForm.get('terms'); }

  get passwordGroup() { return this.signupForm.get('passwordGroup'); }


}


