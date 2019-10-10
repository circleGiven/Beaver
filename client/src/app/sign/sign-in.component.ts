import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from './user.service';

@Component({
  templateUrl: 'sign-in.component.html'
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  loginHandler(): void {
    this.submitted = true;
    if (this.form.dirty && this.form.valid) {
      this.userService.login(this.form.value).subscribe((value => {
        alert('success');
      }));
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
