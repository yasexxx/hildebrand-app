import { isPlatformBrowser } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faMoneyBillWaveAlt } from '@fortawesome/free-solid-svg-icons/';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NavService } from '../shared/nav.service';
import { SearchBarComponent } from '../shared/search-bar/search-bar.component';
import { CartService } from '../_services/cart.service';
import { SearchService } from '../_services/search.service';
import { TokenStackService } from './../_services/token-stack.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [
    SearchBarComponent
  ]
})
export class NavbarComponent implements OnInit, OnDestroy {

  isLoading: Observable<boolean> = this.tokenStack.loadingLogOut$;

  title = 'Hildebrand';
  moneyBillWaveAlt = faMoneyBillWaveAlt;
  collapsed = true;
  isHover = false;
  isHover2 = false;
  isLoggedIn = false;
  userName = '';
  subscription$: Subscription;
  subscription2$: Subscription;
  subscription3$: Subscription;
  subscription4$: Subscription;
  subscription5$: Subscription;
  roles;
  isAdmin$: boolean;
  cart = 0;
  cartItems = [];
  options = {
    position: ['top', 'right'],
    timeOut: 4000,
    lastOnBottom: true,
    pauseOnHover: true,
    clickToClose: true,
    maxLength: 0
  };
  
  keyword:string;
  searchResult = [];
  onShow = true;
  fakeKeyword = '';

  searchInput = new FormControl();
  activateDropdown = false;
  searchForm: FormGroup = this.fb.group({
    searchInput: this.searchInput
  });

  constructor(private tokenStack: TokenStackService,
              private router: Router,
              private navService: NavService,
              private cartService: CartService,
              private searchService: SearchService,
              private fb: FormBuilder,
              @Inject(PLATFORM_ID) private platformId ) {
               }

  onSearch(event): void {
    if(event.status === 'VALID'){
      const searchFilter = event.value.searchInput;
      this.searchService.changeKeyword(searchFilter);
      this.router.navigate(['/search']);
      this.fakeKeyword = searchFilter;
      if(!this.searchService.networkValidation){
        this.searchService.changeNetworkValidation(true);
        this.searchService.toSearchPage();
      }
      if (this.keyword === this.fakeKeyword){
        this.onShow = false;
      }
    }
  }

  searchChanges() {
    this.subscription4$ = this.searchInput.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(
      res => {
        this.keyword = res;
        if (this.keyword === ''){
          this.activateDropdown = false;
          this.onShow = true;
        } else {
          this.activateDropdown = true;
          if (this.keyword === this.fakeKeyword){
            this.onShow = false;
          } else{
            this.onShow = true;
          }
        }
      }
    )
  }

  navigateToView(id, name){
    this.activateDropdown = false;
    this.searchService.changeKeyword(name);
    this.searchInput.setValue(name);
    this.router.navigate(['/search']);
    this.onShow = false;
    this.fakeKeyword = name;
    if(!this.searchService.networkValidation){
      this.searchService.changeNetworkValidation(true);
      this.searchService.toSearchPage();
    }
    if (this.keyword === this.fakeKeyword){
      this.onShow = false;
    } else{
      this.onShow = true;
    }
  }


  initSearchApi(){
    this.subscription5$ = this.searchService.getSearchResult()
      .subscribe( res=> {
        this.searchResult = res;
        this.searchService.changeArray(this.searchResult);
      }, err => {
        err;
      })
  }

  mouseOver(): void {
    if (this.isHover === false){
      this.isHover = true;
  }
  }

  mouseOut(): void {
    if (this.isHover === true){
      this.isHover = false;
    }
  }

  mouseOver2(): void {
    if (this.isHover2 === false){
      this.isHover2 = true;
  }
  }

  mouseOut2(): void {
    if (this.isHover2 === true){
      this.isHover2 = false;
    }
  }

  collapsedActivate(): void {
    if (this.collapsed === false){
      this.collapsed = true;
    }
  }

  logout(): void {
    if ( isPlatformBrowser(this.platformId)){
      this.subscription2$ = this.tokenStack.logOut().subscribe(
        data => {
          if (data){
            this.cartService.clearCartLoc();
          }}
      );}
  }

  navigateAdmin(): void{
    this.router.navigate(['/admin']);
  }

  viewCart() {
    this.router.navigate(['/cart']);
    this.collapsedActivate();
  }

  viewProfile() {
    this.router.navigate(['user']);
    this.collapsedActivate();
  }

  viewOrder() {
    this.router.navigate(['user/order']);
    this.collapsedActivate();
  }

  subCart(): void {
    this.subscription3$ = this.navService.navCart$.subscribe(
      value => {
        this.cart = value;
      }, err => {
        err;
      }

    );
  }

  subUser(): void {
    if ( isPlatformBrowser(this.platformId)){
      this.subscription$ = this.tokenStack.getToken().subscribe(
        str => {
          this.isLoggedIn = !!(str);
          if (this.isLoggedIn) {
            const user = this.tokenStack.getUser();
            this.roles = user.roles;
            this.isAdmin$ = this.roles.includes('ROLE_ADMIN');
            this.userName = user.username;
          }
        },
         err => {
           err;
         }
      );
    }
  }

  ngOnInit(): void {
    this.onShow = true;
    this.initSearchApi();
    this.searchChanges();
    this.cartService.initCart();
    this.subUser();
    this.subCart();
    this.cartService.initCart();
  }

  ngOnDestroy(): void {
    if (this.subscription2$) { this.subscription2$.unsubscribe(); }
    if (this.subscription$) { this.subscription$.unsubscribe(); }
    if (this.subscription3$) { this.subscription3$.unsubscribe(); }
    if (this.subscription4$) { this.subscription4$.unsubscribe(); }
    if (this.subscription5$) { this.subscription5$.unsubscribe(); }
  }


}
