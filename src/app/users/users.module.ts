import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';


@NgModule({
  declarations: [LogoutComponent, UserProfileComponent, UserEditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    UserProfileComponent,
    LogoutComponent,
    UserEditComponent
  ]
})
export class UsersModule { }
