import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { AuthService } from './../../_services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
  username = '@username';
  isUserSuccess = true;
  uploadFile;
  avatarProfile;
  userId:string;
  user = {
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phoneNumber: ''
  };

  avatar = {
    data: '',
    mimetype: '',
    url: 'https://ssl.gstatic.com/accounts/ui/avatar_2x.png'
  };

  mimetype:string;


  subscription$ : Subscription;
  subscription2$ : Subscription;
  subscription3$: Subscription;
  subscription4$: Subscription;

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(PLATFORM_ID) private platfromId: string) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.subscription$ = this.authService.getUserApi(id)
      .subscribe(
        res => {
          const responseObj = res[0];
          this.isUserSuccess = true;
          this.user.firstname = responseObj.firstname;
          this.user.lastname = responseObj.lastname;
          this.user.email = responseObj.email;
          this.user.address = responseObj.address;
          this.user.phoneNumber = responseObj.phoneNumber;
          this.username = responseObj.username;
          this.userId = responseObj._id;
        }, err => {
          err;
          this.isUserSuccess = false;
          this.router.navigate(['/404'], { queryParams: { user: id, register_error: '404'}});
        }
      );
    this.subscription4$ = this.authService.getAvatarApi(id)
        .subscribe(
          res => {
            const responseObj2 = res[0];
            this.avatar.data = responseObj2.data;
            this.avatar.url = responseObj2.url;
            this.avatar.mimetype = responseObj2.mimetype;
          }, err => {
            err;
          }
        )
  }

  ngOnDestroy(): void {
    if (this.subscription$) {
      this.subscription$.unsubscribe();
    } if (this.subscription2$) {
      this.subscription2$.unsubscribe();
    } if (this.subscription3$) {
      this.subscription3$.unsubscribe();
    } if (this.subscription4$) {
      this.subscription4$.unsubscribe();
    }
  
  }

  onSubmit() {
    this.subscription2$ = this.authService.updateUser(this.userId, this.user)
      .subscribe(
        res => {
          this.router.navigate(['/user']);
          if(isPlatformBrowser(this.platfromId)){
            window.scrollTo(0,0);
          }
        }, err => {
          err;
        }
      );
  }

  attachedFile(event){
    const formData = new FormData();
    const file = event.target.files[0];
    const img = /image/gi;
    if (file?.name !== undefined && (file.type).search(img) !== -1){
      this.avatarProfile = file;
      formData.append('file', this.avatarProfile);
      if(formData){
        this.subscription3$ = this.authService.updateProfilePic(this.userId,formData)
          .subscribe( res => {
            this.ngOnInit();
          }, err => {
            err;
          })
        }
    }
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

  cancelButton(){
    this.router.navigate(['/user']);
    if(isPlatformBrowser(this.platfromId)){
      window.scrollTo(0,0);
    }
  }
}
