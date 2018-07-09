import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../_services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authSerive: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ( this.authSerive.isAuthenticatedAndNotExpired() ) {
      // logged in so return true
      console.log( 'userInfo is available in localStorage' );
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
