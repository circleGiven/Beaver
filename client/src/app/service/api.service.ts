import {HttpParams} from '@angular/common/http';

export class ApiService {

  queryParams(paramObject): HttpParams {
    return new HttpParams();
  }
}
