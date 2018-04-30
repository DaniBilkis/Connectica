import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ViewChild
}                       from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mobileQuery: MediaQueryList;
  @ViewChild('snav') navigationBar;

  menuList = [
    {
      link : '',
      title: 'Dashboard',
      icon: 'dashboard_icon' // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
    },
    {
      link : '',
      title: 'Messages',
      icon: 'messages_icon'
    },
    {
      link : '/transactions',
      title: 'Transactions',
      icon: 'transactions_icon'
    },
    {
      link : '/invoices',
      title: 'Invoice Financing',
      icon: 'invoice_icon'
    },
    {
      link : '',
      title: 'Statistics',
      icon: 'statistics_icon'
    }
  ];

  adminList = [
    {
      link : '',
      title: 'Notification',
      icon: 'notification_icon'
    },
    {
      link : 'showListBottomSheet($event)',
      title: 'Settings',
      icon: 'settings_icon'
    }
  ];


  private _mobileQueryListener: () => void;


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, sanitizer: DomSanitizer, iconRegistry: MatIconRegistry) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    iconRegistry.addSvgIcon(
      'avatar_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_perm_identity_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'dashboard_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_dashboard_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'messages_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_message_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'transactions_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_compare_arrows_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'invoice_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_description_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'statistics_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_assessment_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'notification_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_notifications_black_24px.svg'));

    iconRegistry.addSvgIcon(
      'settings_icon',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic_settings_black_24px.svg'));
  }

  ngOnInit() {
    this.navigationBar.toggle();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



}
