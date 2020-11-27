import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { ShoppingCartComponent } from '../../core/shopping-cart/shopping-cart.component';
import { NavService } from '../../shared/nav.service';
import { CartService } from '../../_services/cart.service';
import { CheckOutService } from '../../_services/check-out.service';
import { LoaderService } from '../../_services/loader.service';
import { TokenStackService } from '../../_services/token-stack.service';



export const accountValidationMessages = {
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
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ],
  'country': [
    { type: 'required', message: 'Country is required' },
  ],
  'streetAddress': [
    { type: 'required', message: 'Street address is required' },
  ],
  'city': [
    { type: 'required', message: 'Town or city is required' },
  ],
  'postcode': [
    { type: 'required', message: 'Post code is required' },
  ],
  'state': [
    { type: 'required', message: 'State is required' },
  ],
  'terms': [
    { type: 'required', message: 'You must accept terms and conditions' }
  ],
  'address': [
    { type: 'required', message: 'Address is required'},
    { type: 'pattern', message:'Your address is invalid'}
  ]
  };

const emailPattern = Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$');



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  providers: [
    ShoppingCartComponent
  ]
})
export class CheckoutComponent implements OnInit, OnDestroy {
  accountValidationMessages$ = accountValidationMessages;

  checkOutForm:FormGroup = this.fb.group ({
    firstname : ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    companyName: [''],
    country: ['', Validators.required],
    streetAddress: ['', Validators.required],
    city: ['', Validators.required],
    postcode: ['', Validators.required],
    state: ['', Validators.required],
    email: ['', Validators.compose([Validators.required,emailPattern ])],
    phoneNumber : [''],
    orderNote: [''],
    terms : ['', [Validators.requiredTrue]]
  });

  paymentForm: FormGroup = this.fb.group({
    payment: ['cod']
  })


  isSuccessful = false;
  errorMessage = '';
  isLoading: Subject<boolean> = this.loadService.isLoading;
  subscription$ : Subscription;
  userId: string;
  cartItems = [];
  totalAmount = 0;
  shippingAmount = 0;
  finalTotal = 0;
  validForm = false;
  subscription2$: Subscription;
  subscription3$: Subscription;

  constructor(private checkOutService: CheckOutService,
              private fb: FormBuilder,
              private shoppingCart: ShoppingCartComponent,
              private tokenService: TokenStackService,
              private router: Router,
              private cartService: CartService,
              private navService: NavService,
              private loadService: LoaderService) {
                this.shippingAmount = 20;
                this.getFinalTotal();
               }

  ngOnInit(): void {
    this.shoppingCart.ngOnInit();
    this.cartItems = this.shoppingCart.addedCart;
    this.totalAmount = this.shoppingCart.totalAmount;
    this.userId = this.shoppingCart.userId;
    this.getFinalTotal();
    
  }

  ngOnDestroy(): void {
    if(this.subscription$) { this.subscription$.unsubscribe(); }
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
    if(this.subscription3$) { this.subscription3$.unsubscribe(); }
    this.shoppingCart.ngOnDestroy();
  }

  getFinalTotal(): void{
    this.finalTotal = this.shippingAmount+this.totalAmount;
  }

  subTotal(qty:number, price:number){
    let subTotal = 0;
    subTotal = qty*price;
    return subTotal;
  }

  getItemsOnCart(): void {
    this.cartService.initCart();
  }

  onSubmit(): void {
    const form = this.checkOutForm;
    const paymentform = this.paymentForm;
    if (form.status === 'INVALID' ) {
      this.errorMessage = 'Some field are missing, complete the form and try again!'
      this.validForm = false;
    } else {
        this.validForm = true;
        const phone$ = this.phoneNumber.value;
        const formData = {
          firstname: this.firstname.value,
          lastname: this.lastname.value,
          email: this.email.value,
          companyName: this.companyName.value,
          country: this.country.value,
          streetAddress: this.streetAddress.value,
          city : this.city.value,
          postcode: this.postcode.value,
          state: this.state.value,
          phoneNumber: phone$.nationalNumber,
          terms: this.terms.value,
          orderNotes: this.orderNote.value,
          paymentOption: this.payment.value,
          value:{
            totalAmount: this.totalAmount,
            shippingAmount: this.shippingAmount
          }
        };
        this.subscription$ =this.checkOutService.checkOutApi(this.userId, formData)
          .subscribe( res => {
            this.subscription2$ = this.cartService.deleteAllApi(this.userId)
              .subscribe(res => {
                this.cartService.clearCartLoc();
                this.navService.changeCart(0);
                this.isSuccessful = true;
              }, err => {
                console.log(err);
              })
          }, err => {
            console.log(err);
            this.isSuccessful = false;
            this.subscription3$ = this.tokenService.logOut()
                  .subscribe( log => {
                    this.router.navigateByUrl('**', { skipLocationChange: true}).then( () =>
                    this.router.navigate(['/check-out']));
                  });
          });
    }
  }

  
  passwordMatchValidator(control: AbstractControl) {
    const v1 = control.value.password;
    const v2 = control.value.confirmPass;
    const result = v1 ===  v2 ? null : { mismatch : true} ;
    return result;
  }

  get firstname() { return this.checkOutForm.get('firstname'); }

  get lastname() { return this.checkOutForm.get('lastname'); }

  get email() { return this.checkOutForm.get('email'); }

  get companyName() { return this.checkOutForm.get('companyName'); }

  get country() { return this.checkOutForm.get('country'); }

  get streetAddress() { return this.checkOutForm.get('streetAddress'); }

  get postcode() { return this.checkOutForm.get('postcode'); }

  get state() { return this.checkOutForm.get('state'); }

  get city() { return this.checkOutForm.get('city')}

  get phoneNumber() { return this.checkOutForm.get('phoneNumber'); }

  get orderNote() { return this.checkOutForm.get('orderNote'); }

  get terms() { return this.checkOutForm.get('terms'); }

  get payment() { return this.paymentForm.get('payment'); }

}
