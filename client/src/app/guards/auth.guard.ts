import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from '../service/auth.service';
import {Observable} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService,
              private toastr: ToastrService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if not authenticated
    if (!this.authService.isAuthenticated()) {
      this.toastr.warning('권한 인증에 실패하였습니다.');
      this.router.navigate(['/sign/login']);
      return false;
    }
    return true;
  }
}
