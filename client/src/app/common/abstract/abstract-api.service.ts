import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Injector} from '@angular/core';
import {environment} from '../../../environments/environment';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

export abstract class AbstractApiService {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  protected readonly TOKEN_TYPE = 'Bearer';

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  protected readonly TOKEN_KEY = 'BEAVER_TOKEN';
  protected readonly API: string = environment.api;

  protected httpClient: HttpClient;
  protected toastr: ToastrService;

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(protected injector: Injector) {
    this.httpClient = injector.get(HttpClient);
    this.toastr = injector.get(ToastrService);
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Implement Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Override Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private errorHandler(error: HttpErrorResponse, isUsedToken: boolean = false) {
    const errMsg = error.error.message || 'Server error';
    // alert
    this.toastr.error(errMsg);
    // 토큰 만료
    if (isUsedToken && error.status === 401) {
      // 토큰 제거
      this.removeTokenInStorage();
    }
    return throwError(error);
  }

  private getAuthToken(): string {
    return this.TOKEN_TYPE + ' ' + this.getTokenFromStorage();
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  protected getTokenFromStorage(): string {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  protected removeTokenInStorage(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  protected get(url: string) {
    return this.httpClient.get(url).pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  protected getWithToken(url: string) {
    // 헤더
    const headers = new HttpHeaders({
      'Content-Type'	: 'application/json',
      Authorization	: this.getAuthToken()
    });
    // 호출
    return this.httpClient.get(url, {headers}).pipe(
      catchError(error => this.errorHandler(error, true))
    );
  }

  protected post(url: string, data) {
    // 헤더
    const headers = new HttpHeaders({'Content-Type'	: 'application/json'});
    // 호출
    return this.httpClient.post(url, data, {headers}).pipe(
      catchError(error => this.errorHandler(error))
    );
  }

  protected postWithToken(url: string, data) {
    // 헤더
    const headers = new HttpHeaders({
      'Content-Type'	: 'application/json',
      Authorization	: this.getAuthToken()
    });
    // 호출
    return this.httpClient.post(url, data, {headers}).pipe(
      catchError(error => this.errorHandler(error, true))
    );
  }
}
