import {NgModule} from '@angular/core';
import {SignRoutingModule} from './sign-routing.module';
import {SignInComponent} from './sign-in.component';
import {SignUpComponent} from './sign-up.component';
import {FormModule} from '../component/form.module';
import {PasswordResetComponent} from './password-reset.component';

@NgModule({
  imports: [
    FormModule,
    SignRoutingModule
  ],
  declarations: [
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent
  ]
})
export class SignModule {}
