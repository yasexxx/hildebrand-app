import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UserProfileComponent, 
    UserEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [
    UserProfileComponent,
    UserEditComponent
  ]
})
export class UsersModule { }
