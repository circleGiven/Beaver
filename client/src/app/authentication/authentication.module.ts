import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {LoginViewComponent} from './view/login-view.component';
import {RegisterViewComponent} from './view/register-view.component';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {path: 'register', component: RegisterViewComponent},
      {path: 'login', component: LoginViewComponent},
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AuthenticationComponent,
    HeaderComponent,
    LoginViewComponent,
    RegisterViewComponent
  ],
  providers: [],

})
export class AuthenticationModule { }
