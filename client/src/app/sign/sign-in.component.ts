import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  templateUrl: 'sign-in.component.html'
})
export class SignInComponent {

  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {

  }

  loginHandler() {
    console.log(this.isInvalidUserName());
  }

  isInvalidUserName() {
    return this.form.controls.email.touched && this.form.controls.email.hasError('email');
  }

  isInvalidPassword() {

  }
}
