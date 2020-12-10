import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TokenStackService } from './../../_services/token-stack.service';
import { AuthService } from '../../_services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {

  user = {
    name: '',
    email: '',
    address: '',
    phoneNumber: '',
  };

  avatar = {
    data: '',
    mimetype: '',
    url: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
  };

  userId: string;
  userAsset;
  currentUser: any;
  subscription$: Subscription;
  subscription2$: Subscription;

  constructor(private tokenStack: TokenStackService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.tokenStack.getUser();
    this.userId = this.currentUser.id;
    this.subscription$ = this.authService.getUserApi(this.userId)
      .subscribe(
        res => {
          this.userAsset = res[0];
          this.user.name = this.userAsset.firstname+' '+this.userAsset.lastname;
          this.user.email = this.userAsset.email;
          this.user.address = this.userAsset.address;
          this.user.phoneNumber = this.userAsset.phoneNumber ? this.userAsset.phoneNumber: 'Not available';
        },
        err => {
          err;
        }
      );
    this.subscription2$ = this.authService.getAvatarApi(this.userId)
      .subscribe( res => {
        const result = res[0];
        this.avatar.data = result.data;
        this.avatar.mimetype = result.mimetype;
        this.avatar.url = result.url;
      }, err => {
        err;
      })
  }

  ngOnDestroy(): void {
    if(this.subscription$) {
      this.subscription$.unsubscribe();
    } if (this.subscription2$){
      this.subscription2$.unsubscribe();
    }
  }

  updateUser(){
    this.router.navigate(['user/profile', this.currentUser.id ]);
  }

  base64Img(file){
    const reg = /https/gi;
    const imgData = file.data;
    const imgUrl = file.url;
    if (imgData.length > 50 ){
      return 'data:'+file.mimetype+';base64,'+imgData;
    } else {
      if(imgUrl.search(reg) !== -1){
        return imgUrl;
      } else{
        return 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png';
      }
    }

  }
}
