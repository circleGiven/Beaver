import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ResponseInterface} from '../interfaces/Response.interface';
import {tap} from 'rxjs/operators';
import {ValidateUtil} from '../utils/validate.util';

@Injectable({providedIn: 'root'})
export class UserService {

  /*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  | private Variables
  |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/

  private readonly TOKEN_KEY = 'BEAVER_TOKEN';
  private readonly URL_USER = '/api/user';
  private readonly URL_AUTH = '/api/auth';

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
      tap((data: ResponseInterface) => {
        if (ValidateUtil.isNotEmptyValue(data) && data.result) {
          // set token
          this.setToken(data.result);
        }
      }));
  }

  register(params) {
    return this.httpClient.post(this.URL_USER + '/register', params);
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
