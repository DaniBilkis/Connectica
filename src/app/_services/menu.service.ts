import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  private isLeftNavigationExpandedSubject = new BehaviorSubject<boolean>( false );
  public isLeftNavigationExpanded = this.isLeftNavigationExpandedSubject.asObservable();

  public leftNavigatoinMenuExpanded( isExpanded: boolean ) {
    this.isLeftNavigationExpandedSubject.next( isExpanded );
  }

}
