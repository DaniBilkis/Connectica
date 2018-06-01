import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild
}                          from '@angular/core';
import { MediaMatcher }    from '@angular/cdk/layout';

import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @ViewChild('snav') navigationBar;

  user;

  navToggle: boolean;

  menuList = [
    {
      link : '/dashboard',
      title: 'Dashboard',
      icon: 'dashboard' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
    },
    {
      link : '/messages',
      title: 'Messages',
      icon: 'message'
    },
    {
      link : '/transactions',
      title: 'Transactions',
      icon: 'compare_arrows'
    },
    {
      link : '',
      title: 'Statistics',
      icon: 'insert_chart'
    },
    {
      link : '',
      title: 'Invoice financing',
      icon: 'description',
      submenus: [
        {
          link : '/invoices',
          title: 'Invoices',
          icon: 'filter_none'
        },
        {
          link : '/offers',
          title: 'Offers',
          icon: 'local_offer'
        }
      ]
    },
    {
      link : '',
      title: 'Logistics',
      icon: 'local_shipping',
      submenus: [
        {
          link : '',
          title: 'List of offerings',
          icon: 'list'
        },
        {
          link : '',
          title: 'Manage contracts',
          icon: 'assignment'
        }
      ]
    },
    {
      link : '',
      title: 'Manage all contracts',
      icon: 'work'
    },
    {
      link : '',
      title: 'Manage access rights',
      icon: 'style',
      submenus: [
        {
          link : '',
          title: 'Current access pool',
          icon: 'style'
        },
        {
          link : '',
          title: 'Manage open pools',
          icon: 'style'
        },
        {
          link : '',
          title: 'Granted access pools',
          icon: 'style'
        }
      ]
    },
    {
      link: '/openContracts' ,
      title: 'Open Contracts',
      icon: 'monetization_on'
    },
    {
      link : '',
      title: 'FX hedging',
      icon: 'euro_symbol',
      submenus: [
        {
          link : '/fx_payments',
          title: 'FX payments',
          icon: 'euro_symbol'
        },
        {
          link : '',
          title: 'List of FX invoices',
          icon: 'euro_symbol'
        },
        {
          link : '',
          title: 'History of FX hedging',
          icon: 'euro_symbol'
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


  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthenticationService ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.authService.isAuthenticated.subscribe(message => { this.navToggle = message; });
    console.log( 'This is a current user -> ' +  this.user );
    // console.log( 'This is a current user first name-> ' + this.user.fi);
    // this.navigationBar.toggle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.authService.logout();
    this.navigationBar.toggle();
  }

}
