import {Injectable, Injector} from '@angular/core';
import {AjaxResponse} from '../interfaces/ajax-response';
import {tap} from 'rxjs/operators';
import {ValidateUtil} from '../utils/validate.util';
import {Observable} from 'rxjs';
import {AbstractApiService} from '../common/abstract/abstract-api.service';
import {isEmpty} from 'lodash';

@Injectable({providedIn: 'root'})
export class UserService extends AbstractApiService {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private readonly USER_INFO = 'BEAVER_USER';
  private readonly URL_USER = this.API + '/user';
  private readonly URL_AUTH = this.API + '/auth';

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Protected Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Public Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Constructor
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  constructor(protected injector: Injector) {
    super(injector);
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

  isDuplicatedEmail(email: string) {
    return this.httpClient.get(this.URL_USER + `/duplicated?email=${email}`);
  }

  // TODO server 에서 토큰 검증
  isLogged(): boolean {
    const token = this.getTokenFromStorage();
    return isEmpty(token) === false;
  }

  login(params) {
    return this.httpClient.post(this.URL_AUTH + '/login', params).pipe(
      tap((data: AjaxResponse<any>) => {
        if (ValidateUtil.isNotEmptyValue(data) && data.result) {
          // set token
          this.setTokenInStorage(data.result);
        }
      }));
  }

  logOut() {
    this.removeTokenInStorage();
    this.removeUserInfoInStorage();
    // TODO next subscription to GNB
    return new Observable();
  }

  register(params) {
    return this.httpClient.post(this.URL_AUTH + '/register', params);
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private setTokenInStorage(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private setUserInfoInStorage(user): void {
    localStorage.setItem(this.USER_INFO, JSON.stringify(user));
  }

  private removeTokenInStorage(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  private removeUserInfoInStorage(): void {
    localStorage.removeItem(this.USER_INFO);
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
