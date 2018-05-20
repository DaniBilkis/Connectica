import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>( this.hasToken() );
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor( private http: HttpClient ) {
  }

  login(username: string, password: string) {
    console.log( 'Authentication Service - calling api/authenticate with  -> ' + username + ' and ' + password );
    return this.http.post<any>('/api/authenticate', {username: username, password: password} )
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

  public getUser(): string {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('currentUser');
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
    localStorage.removeItem('currentUser');
    this.isAuthenticatedSubject.next(false);
  }
}
