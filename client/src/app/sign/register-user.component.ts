import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {duplicatedUserValidator, mustMatch} from '../validator/user.validator';
import {Router} from '@angular/router';

@Component({
  templateUrl: 'register-user.component.html'
})
export class RegisterUserComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
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
      this.userService.create(this.form.value).subscribe(
        data => {
        // route to login page
        this.router.navigateByUrl('/sign/login').then();
      }, error => alert(error));
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
