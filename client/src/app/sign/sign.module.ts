import {NgModule} from '@angular/core';
import {SignRoutingModule} from './sign-routing.module';
import {SignInComponent} from './sign-in.component';
import {SignUpComponent} from './sign-up.component';
import {FormModule} from '../component/form.module';
import {PasswordResetComponent} from './password-reset.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    FormModule,
    SignRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent
  ]
})
export class SignModule {}
