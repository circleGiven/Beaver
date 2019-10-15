import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class UserService {

  private readonly URL_USER = '/api/user';

  constructor(private httpClient: HttpClient) {
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
}
