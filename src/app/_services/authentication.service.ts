import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Credentials } from '../_shared/credentials.model';

@Injectable()
export class AuthenticationService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>( this.hasToken() );
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor( private http: HttpClient ) {
  }

  public login( credentials: Credentials ): Observable<any> {
    // We're using the spread syntax to get the
    // individual properties off the supplied user
    // object onto a new object
    // console.log( 'Authentication Service - calling api/authenticate with  -> ' + { ...credentials } );
    return this.http.post('/api/authenticate/', { ...credentials });
  }

  /*
  login( credentials: Credentials ) {
    // console.log( 'Authentication Service - calling api/authenticate with  -> ' + username + ' and ' + password );
    return this.http.post<any>('/api/authenticate', {...credentials} )
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          // localStorage.setItem('currentUser', user );
          this.isAuthenticatedSubject.next(true);
        }

        return user;
      });
  }
*/
  private setUserInfo(userInfo: any): void {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  private setExpiresAt(expiresAt: number): void {
    // When we compare the current time against the expires at time
    // later, we do so using a JavaScript Date object. The Date
    // object deals with timestamps differently than how we have them
    // in the token, so we need to multiple by 1000
    localStorage.setItem('expiresAt', JSON.stringify(expiresAt * 1000));
  }

  public setUser(token: string, userInfo: any, expiresAt: number): void {
    // using local storage is only required
    // when not using cookies to store the JWT
    // this.setToken(token);
    this.setUserInfo(userInfo);
    this.setExpiresAt(expiresAt);
    this.isAuthenticatedSubject.next(true);
  }

  public getUserInfo(): any {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  /*
  public getUser(): string {
    console.log( 'Authentication Service - getUser method ->' + localStorage.getItem('userInfo') );
    return JSON.parse( localStorage.getItem('userInfo') );
  }
*/
  private hasToken(): boolean {
    return !!localStorage.getItem('userInfo');
  }
  /*
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean reflecting
    // whether or not the token is expired

    return this.jwtHelperService.isTokenExpired(token);
  }
*/
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    this.isAuthenticatedSubject.next(false);
  }
}
