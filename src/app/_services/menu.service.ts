import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable()
export class MenuService {

  private isLeftNavigationExpandedSubject = new BehaviorSubject<boolean>( false );
  public isLeftNavigationExpanded = this.isLeftNavigationExpandedSubject.asObservable();

  constructor(public http: HttpClient /*, public authService: AuthService*/) {}

  public leftNavigatoinMenuExpanded( isExpanded: boolean ) {
    this.isLeftNavigationExpandedSubject.next( isExpanded );
  }

  public getMenus(): Observable<any> {
    return this.http.get('/api/menus');
  }
}
