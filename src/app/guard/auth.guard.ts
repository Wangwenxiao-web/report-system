import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, UrlTree, CanLoad, Route } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(
    private router: Router,
    private authservice: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;
      
      return this.checkLogin(url);
    // if(sessionStorage.getItem("userinfo")) {
    //   return true;
    // }else {
    //   this.router.navigateByUrl('/login');
    //   return false
    // }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkLogin(url:string): boolean {
    // if(this.authservice.isLoggedIn) { return true; }
    if(sessionStorage.getItem('userinfo')) { return true; }
    this.authservice.redirectUrl = url;

    this.router.navigate(['/login']);
    return false;
  }

  canLoad(route: Route): boolean {
    const url = `/${route.path}`;
  
    return this.checkLogin(url);
  }
  
}
