import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TokenStackService } from './../_services/token-stack.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [
    LogoutComponent, 
    UserProfileComponent, 
    UserEditComponent,],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [
    UserProfileComponent,
    LogoutComponent,
    UserEditComponent
  ],
  providers: [
    TokenStackService
  ]
})
export class UsersModule { }
