import { Injectable }             from '@angular/core';
import { HttpClient }             from '@angular/common/http';
import { BehaviorSubject }        from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { plainToClass }           from 'class-transformer';
import { MenuItemsResults }       from '../_shared/MenuItemsResults';

@Injectable()
export class MenuService {

  public navItems: MenuItemsResults;

  private isLeftNavigationExpandedSubject = new BehaviorSubject<boolean>( false );
  public isLeftNavigationExpanded = this.isLeftNavigationExpandedSubject.asObservable();

  private leftNavigationMenuSubject = new BehaviorSubject<MenuItemsResults>( this.navItems );
  public leftNavigationMenu = this.leftNavigationMenuSubject.asObservable();

  constructor( public http: HttpClient ) {}

  public leftNavigatoinMenuExpanded( isExpanded: boolean ) {
    this.isLeftNavigationExpandedSubject.next( isExpanded );
  }

  public getMenus() {

    this.http
      .get('/api/menus' )
      .map(response => {
        const menuResults = plainToClass( MenuItemsResults, response as Object );
        // console.log( 'Loaded and transformed repositories: ',  menuResults );
        return menuResults;
      })
      .subscribe(menuResult => {
        this.leftNavigationMenuSubject.next( menuResult );
      });

  }
}
