import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Credentials } from '../_shared/credentials.model';

@Injectable()
export class AuthenticationService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>( this.isAuthenticatedAndNotExpired() );
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  private userInfoSubject = new BehaviorSubject<any>( this.getUserInfo() );
  public userInfo = this.userInfoSubject.asObservable();

  constructor( private http: HttpClient ) {
  }

  public isAuthenticatedAndNotExpired(): boolean {
    // Get the time the token expires
    const expiresAt = localStorage.getItem('expiresAt');

    // If there's no expiresAt value, make
    // the user log in
    if ( !expiresAt ) {
      return false;
    }

    // Our indication as to whether the user is authenticated or not
    // is if they have an unexpired token. Return a boolean that compares
    // the current time with the token expiry time. The expiresAt value
    // needs to be parsed because it is stored as a string
    return new Date().getTime() < parseInt(expiresAt);
  }

  public login( credentials: Credentials ): Observable<any> {
    // We're using the spread syntax to get the
    // individual properties off the supplied user
    // object onto a new object
    // console.log( 'Authentication Service - calling api/authenticate with  -> ' + { ...credentials } );
    return this.http.post('/api/authenticate/', { ...credentials });
  }

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
    this.userInfoSubject.next( userInfo );
    this.isAuthenticatedSubject.next(true);
  }

  public getUserInfo(): any {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  public logout(): Observable<any> {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    localStorage.removeItem('expiresAt');
    this.userInfoSubject.next( '' );
    this.isAuthenticatedSubject.next(false);
    return this.http.post('/api/logout', {});
  }
}
