import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { DomSanitizer }      from '@angular/platform-browser';
import { MatIconRegistry }   from '@angular/material';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public showSearch = false;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  apps = [
    {
      link : '',
      title: 'Workload',
      desc: 'App description goes here',
      icon: 'action:ic_donut_large_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Complete'
    },
    {
      link : '',
      title: 'Memberships',
      desc: 'App description goes here',
      icon: 'action:ic_card_membership_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Complete'
    },
    {
      link : '',
      title: 'Transactions',
      desc: 'App description goes here',
      icon: 'action:ic_shopping_cart_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'Categories',
      desc: 'App description goes here',
      icon: 'device:ic_storage_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'Geographics',
      desc: 'App description goes here',
      icon: 'maps:ic_place_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'Business',
      desc: 'App description goes here',
      icon: 'action:ic_store_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'Financials',
      desc: 'App description goes here',
      icon: 'editor:ic_attach_money_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'VP Dashboard',
      desc: 'App description goes here',
      icon: 'action:ic_dashboard_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'Inventory',
      desc: 'App description goes here',
      icon: 'editor:ic_format_list_numbered_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    },
    {
      link : '',
      title: 'Employees',
      desc: 'App description goes here',
      icon: 'action:ic_perm_identity_24px',
      date: '2012-10-16T17:57:28.556094Z',
      status: 'Pending'
    }
  ];

  [
    header: {
      supplierName: string;
      supplierNumber: number;
      charge: number;
  },
  body: {
    shipFrom:{
      name: string;
      address: string;

    }
  }
    ]

  constructor( changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, sanitizer: DomSanitizer, iconRegistry: MatIconRegistry ) {
    this.mobileQuery = media.matchMedia('(max-width: 400px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    iconRegistry.addSvgIcon(
      'search_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_search_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'back_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_arrow_back_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'menu_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_menu_black_24px.svg'));
  }

  ngOnInit() {
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  };

  onKeyUp( searchTerm ) {
    console.log('Transaction Component. Trying to search for ' + searchTerm );
    // this._router.navigate([ 'search' ]);
    // this.sharedService.searchFor( searchTerm );
  }

}
