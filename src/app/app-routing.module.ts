import { SignupComponent } from './navigation/signup/signup.component';
import { LoginComponent } from './navigation/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component'

const routes: Routes = [
	{ path: '' , redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register',component: SignupComponent},


	{ path: '**', redirectTo: '/home' }
	];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
