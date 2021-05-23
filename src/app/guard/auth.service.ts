import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from"rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  redirectUrl: string | null = null;

  constructor(
    private http: HttpClient
  ) { }

  Login(params:any): Observable<any> {
    const url = "http://localhost:3000/users/login"
    return this.http.post(url,params)
    //   .pipe(map((res) => {
        
    //     this.isLoggedIn = true;
    //   })
    // );
  }

  LoginOut(): Observable<boolean>{
    return of(this.isLoggedIn = false);
  }

}
