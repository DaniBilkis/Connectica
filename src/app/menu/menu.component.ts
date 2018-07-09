import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild, ViewEncapsulation
}                          from '@angular/core';
import { MediaMatcher }    from '@angular/cdk/layout';

import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services';
import { Router } from '@angular/router';
import { NavItem } from '../_shared/navitem';
import { MenuListItemComponent } from '../menu-list-item/menu-list-item.component';
import { MenuService } from '../_services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @ViewChild('snav') navigationBar;
  @ViewChild( MenuListItemComponent ) menuItems;

  user: any;

  sidenavWidth = 66;

  isLoggedIn: boolean;

  isExpanded = false;

  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: '/dashboard'
    },
    {
      displayName: 'Messages',
      iconName: 'message',
      route: '/messages'
    },
    {
      displayName: 'Transactions',
      iconName: 'compare_arrows',
      route: '/transactions'
    },
    {
      displayName : 'Statistics',
      iconName: 'insert_chart',
      route: ''
    },
    {
      displayName: 'Invoice financing',
      iconName: 'description',
      submenus: [
        {
          displayName: 'Invoices',
          iconName: 'filter_none',
          route : '/invoices'
        },
        {
          displayName: 'Offers',
          iconName: 'local_offer',
          route : '/offers'
        }
      ]
    },
    {
      displayName: 'Logistics',
      iconName: 'local_shipping',
      submenus: [
        {
          displayName: 'List of offerings',
          iconName: 'list',
          route : ''
        },
        {
          displayName: 'Manage contracts',
          iconName: 'assignment',
          route : ''
        }
      ]
    },
    {
      displayName: 'Manage all contracts',
      iconName: 'work',
      route : '/manageContracts',
    },
    {
      displayName: 'Manage access rights',
      iconName: 'style',
      submenus: [
        {
          displayName: 'Current access pool',
          iconName: 'style',
          route : '',
        },
        {
          displayName: 'Manage open pools',
          iconName: 'style',
          route : ''
        },
        {
          displayName: 'Granted access pools',
          iconName: 'style',
          route : ''
        }
      ]
    },
    {
      displayName: 'Open Contracts',
      iconName: 'monetization_on',
      route: '/openContracts'
    },
    {
      displayName: 'FX hedging',
      iconName: 'euro_symbol',
      submenus: [
        {
          displayName: 'FX payments',
          iconName: 'euro_symbol',
          route : '/fx_payments'
        },
        {
          displayName: 'List of FX invoices',
          iconName: 'euro_symbol',
          route : ''
        },
        {
          displayName: 'History of FX hedging',
          iconName: 'euro_symbol',
          route : ''
        }
      ]
    }
    ];



  adminList = [
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings'
    }
  ];


  private _mobileQueryListener: () => void;


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private authService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private menuService: MenuService ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    // this.user = this.authService.getUserInfo();
    this.authService.userInfo.subscribe( userInfo => { this.user = userInfo; });
    // console.log( 'Menu - Here is UserInfo object -> ' + JSON.stringify( this.user, null, 4 ) );
    this.authService.isAuthenticated.subscribe(message => { this.isLoggedIn = message; });
    // console.log( 'This is a current user -> ' +  JSON.stringify( this.user.firstName ));
    // console.log( 'This is a current user first name-> ' + this.user.fi);
    // this.navigationBar.toggle();
    this.menuService.isLeftNavigationExpanded.subscribe( expanded => { this.isExpanded = expanded; } );
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout()
      .subscribe(
        data => {
          console.log( 'Menu - Logout - before sending message to AlertService' );
          this.alertService.success( data, false );
          this.navigationBar.toggle();
          this.router.navigate(['/login']);
          console.log( 'Menu - Logout - after sending message to AlertService' );
        },
        error => {
          // console.log( 'Here is what we have in the error --> ' + JSON.stringify( error, null, 4 ) );
          this.alertService.error( error.error );
          // this.loading = false;
        });
    // this.authService.logout();

  }

  expandCollapse( fromChild: boolean ) {
    if ( !fromChild || ( fromChild && !this.isExpanded ) ) {
      this.isExpanded = !this.isExpanded;
      this.menuService.leftNavigatoinMenuExpanded( this.isExpanded );
    }

    if ( this.isExpanded ) {
      this.sidenavWidth = 198;
    } else {
      if ( !fromChild ) {
        this.sidenavWidth = 66;
      }
    }
    // this.navigationBar.toggle();
  }
}
