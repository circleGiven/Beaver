import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {UserService} from './user.service';
import {duplicatedUserValidator, mustMatch} from '../validator/user.validator';

@Component({
  templateUrl: 'sign-up.component.html'
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], [duplicatedUserValidator(this.userService)]],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    }, {
      validators: [mustMatch('password', 'confirmPassword')]
    });
  }

  registerUser(): void {
    this.isSubmitted = true;
    if (this.form.valid) {
      this.userService.create(this.form.value).subscribe((value => {
        alert('success');
        // route to login page
      }));
    }
  }

  get email() {
    return this.form.get('email');
  }

  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
