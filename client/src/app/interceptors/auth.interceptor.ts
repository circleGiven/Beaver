import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthService} from '../service/auth.service';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router,
              private readonly toastr: ToastrService,
              private readonly authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.authService.getToken();
    console.log('auth test');
    // set TOKEN in request HEADER
    req = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req).pipe(tap(() => {},
      (err: any) => { // error handler
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {  // if Unauthorized
            this.toastr.warning('권한 인증에 실패하였습니다.');
            this.authService.removeToken();
            this.router.navigate(['/sign/login']);
          }
          return;
        }
      }));
  }
}
