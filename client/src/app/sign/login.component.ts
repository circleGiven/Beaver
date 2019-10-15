import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {PatternConstant} from '../validator/pattern.constant';
import {AuthService} from '../service/auth.service';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean;

  constructor(private formBuilder: FormBuilder,
              private readonly authService: AuthService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(PatternConstant.email)]],
      password: ['', Validators.required],
    });
  }

  loginHandler(): void {
    this.isSubmitted = true;
    if (this.form.valid) {
      // loading show
      this.spinner.show();
      this.authService.login(this.form.value).subscribe((value) => {
        setTimeout(() => {
          // loading hide
          this.spinner.hide();
          // route to main page
          this.router.navigateByUrl('/').then();
        }, 1000);
      }, (error) => {
        setTimeout(() => {
          // loading hide
          this.spinner.hide();
          // TODO test
          this.authService.removeToken();
          this.toastr.error(error.error.message);
        } , 1000);
      });
    }
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
