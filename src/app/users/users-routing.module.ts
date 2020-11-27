import { UserEditComponent } from './user-edit/user-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserOrderComponent } from './user-order/user-order.component';
import { UserOrderViewComponent } from './user-order/user-order-view/user-order-view.component';
import { AuthGuardActivate2 } from '../shared/auth.guard';

const routes: Routes = [
  { path: '' , component: UserProfileComponent },
  { path: 'profile/:id', component: UserEditComponent },
  { path: 'order', component: UserOrderComponent },
  { path:'order/:id', component: UserOrderViewComponent, canActivate: [AuthGuardActivate2] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {


 }
