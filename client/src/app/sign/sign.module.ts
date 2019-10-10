import {NgModule} from '@angular/core';
import {SignRoutingModule} from './sign-routing.module';
import {LoginComponent} from './login.component';
import {FormModule} from '../component/form.module';
import {PasswordResetComponent} from './password-reset.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RegisterUserComponent} from './register-user.component';

@NgModule({
  imports: [
    FormModule,
    SignRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
    RegisterUserComponent,
    PasswordResetComponent
  ]
})
export class SignModule {}
