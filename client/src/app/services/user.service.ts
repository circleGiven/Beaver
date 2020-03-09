import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AjaxResponse} from '../interfaces/ajax-response';
import {tap} from 'rxjs/operators';
import {ValidateUtil} from '../utils/validate.util';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class UserService {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private readonly API: string = environment.api;

  private readonly TOKEN_KEY = 'BEAVER_TOKEN';
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

  constructor(private httpClient: HttpClient) {
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

  list() {
    return this.httpClient.get(this.URL_USER);
  }

  create(params) {
    return this.httpClient.post(this.URL_USER, params);
  }

  remove(params) {
    return this.httpClient.post(this.URL_USER, params);
  }

  isDuplicatedEmail(email: string) {
    return this.httpClient.get(this.URL_USER + `/duplicated?email=${email}`);
  }

  login(params) {
    return this.httpClient.post(this.URL_AUTH + '/login', params).pipe(
      tap((data: AjaxResponse<any>) => {
        if (ValidateUtil.isNotEmptyValue(data) && data.result) {
          // set token
          this.setToken(data.result);
        }
      }));
  }

  register(params) {
    return this.httpClient.post(this.URL_AUTH + '/register', params);
  }

  // TODO change to cookie service
  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Private Method
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | Inner Class
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/
}
