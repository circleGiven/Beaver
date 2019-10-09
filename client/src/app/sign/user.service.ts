import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  private readonly URL_USER = '/api/user';

  constructor(private httpClient: HttpClient) {
  }

  login(params) {
    return this.httpClient.post(this.URL_USER + '/login', params);
  }

  create(params) {
    return this.httpClient.post(this.URL_USER, params);
  }

  remove(params) {
    return this.httpClient.post(this.URL_USER, params);
  }

}
