import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  // 用户登录
  Login(params:any): Observable<any> {
    const url = "http://localhost:3000/users/login"
    return this.http.post(url,params);
  }
}
