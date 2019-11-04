import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';
import {duplicatedUserValidator, mustMatch} from '../validator/user.validator';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {PatternConstant} from '../validator/pattern.constant';
import {AuthService} from '../service/auth.service';

@Component({
  templateUrl: 'register-user.component.html'
})
export class RegisterUserComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private readonly userService: UserService,
              private readonly authService: AuthService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(PatternConstant.email)], [duplicatedUserValidator(this.userService)]],
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
      // loading show
      this.spinner.show();
      this.authService.register(this.form.value).subscribe(
        (data) => {
          setTimeout(() => {
            // loading hide
            this.spinner.hide();
            this.toastr.success('회원가입에 성공하였습니다.');
            // route to login page
            this.router.navigateByUrl('/sign/login').then();
            }, 1000);
          }, (error) => {
          setTimeout(() => {
            // loading hide
            this.spinner.hide();
            this.toastr.error(error.error.message);
          } , 1000);
        });
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
