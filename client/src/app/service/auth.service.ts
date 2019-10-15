import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {ValidateUtil} from '../utils/validate.util';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  private readonly TOKEN_KEY = 'BEAVER_TOKEN';
  private readonly URL_AUTH = '/api/auth';

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

  login(params) {
    return this.httpClient.post(this.URL_AUTH + '/login', params).pipe(
      tap(data => {
        if (data && data['result']) {
          // set token
          this.setToken(data['result']);
        }
      }));
  }

  register(params) {
    return this.httpClient.post(this.URL_AUTH + '/register', params);
  }

  isAuthenticated() {
    const token = this.getToken();
    return ValidateUtil.isNotEmptyValue(token);
  }
}
