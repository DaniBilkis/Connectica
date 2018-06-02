import {Component, OnInit}                      from '@angular/core';
import { Observable }                           from 'rxjs/Observable';
import { ObservableMedia }                      from '@angular/flex-layout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { DashboardCardsService }                from '../_services/dashboard.service';
import { DashboardCard }                        from '../_shared/dashboard-card';
import { DashboardUsersComponent }              from './dashboard-users/dashboard-users.component';
import { DashboardInvoicesReceivedComponent }   from './dashboard-invoices-received/dashboard-invoices-received.component';
import { DashboardInvoicesSentComponent }       from './dashboard-invoices-sent/dashboard-invoices-sent.component';
import { DashboardOrdersReceivedComponent }     from './dashboard-orders-received/dashboard-orders-received.component';
import { DashboardDeliveryNotesSentComponent }  from './dashboard-delivery-notes-sent/dashboard-delivery-notes-sent.component';
import { DashboardRecentTransactionsComponent } from './dashboard-recent-transactions/dashboard-recent-transactions.component';
import { DashboardServiceOfferingsComponent }   from './dashboard-service-offerings/dashboard-service-offerings.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  entryComponents: [
    DashboardUsersComponent,
    DashboardInvoicesReceivedComponent,
    DashboardInvoicesSentComponent,
    DashboardOrdersReceivedComponent,
    DashboardDeliveryNotesSentComponent,
    DashboardRecentTransactionsComponent,
    DashboardServiceOfferingsComponent
  ]
})
export class DashboardComponent implements OnInit {

  cards: DashboardCard[] = [];
  cols: Observable<number>;
  cols_big: Observable<number>;
  cols_sml: Observable<number>;

  constructor(private cardsService: DashboardCardsService,
              private observableMedia: ObservableMedia) {

    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });

  }

  /*
  cards = [
    { title: 'Invoices Received', cols: 3, rows: 1 , content: `<div>Number: 18</div><div>Total Amount: $12,456.12</div>` },
    { title: 'Invoices Sent', cols: 3, rows: 1 },
    { title: 'Orders Received', cols: 3, rows: 1 },
    { title: 'Delivery Notes Sent', cols: 3, rows: 1 },
    { title: 'Recent Transactions - New Documents', cols: 3, rows: 3 },
    { title: 'Service Offerings', cols: 9, rows: 3 },
    { title: 'Revenue per Buyer', cols: 4, rows: 3 },
    { title: 'Inventory Financing', cols: 4, rows: 3 },
    { title: 'Advertisement', cols: 4, rows: 3 },
    { title: 'Payments Calendar', cols: 6, rows: 3 },
    { title: 'Card 11', cols: 6, rows: 3 },
    { title: 'Outstanding Orders per Buyer', cols: 3, rows: 3 },
    { title: 'Messages', cols: 9, rows: 3 }
  ];
  */

  ngOnInit() {
    /* Grid column map */
    const cols_map = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 8],
      ['lg', 12],
      ['xl', 18]
    ]);
    /* Big card column span map */
    const cols_map_big = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 4],
      ['lg', 4],
      ['xl', 4]
    ]);
    /* Small card column span map */
    const cols_map_sml = new Map([
      ['xs', 1],
      ['sm', 2],
      ['md', 2],
      ['lg', 2],
      ['xl', 2]
    ]);
    let start_cols: number;
    let start_cols_big: number;
    let start_cols_sml: number;
    cols_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols = cols;
      }
    });
    cols_map_big.forEach((cols_big, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_cols_big = cols_big;
      }
    });
    cols_map_sml.forEach((cols_sml, mqAliast) => {
      if (this.observableMedia.isActive(mqAliast)) {
        start_cols_sml = cols_sml;
      }
    });
    this.cols = this.observableMedia.asObservable()
      .map(change => {
        return cols_map.get(change.mqAlias);
      }).startWith(start_cols);
    this.cols_big = this.observableMedia.asObservable()
      .map(change => {
        return cols_map_big.get(change.mqAlias);
      }).startWith(start_cols_big);
    this.cols_sml = this.observableMedia.asObservable()
      .map(change => {
        return cols_map_sml.get(change.mqAlias);
      }).startWith(start_cols_sml);

    if( !this.cardsService.getCardsAreSet() ) {
      this.createCards();
      this.cardsService.setCards();
    }

  }


  createCards(): void {
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Invoices Received'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/invoices'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'account_balance'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 3
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 1
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardInvoicesReceivedComponent /* Reference to the component we'd like to spawn */
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Invoices Sent'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/invoices'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 3
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 1
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardInvoicesSentComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Orders Received'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/orders'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 3
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 1
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardOrdersReceivedComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Delivery Notes Sent'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/orders'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 3
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 1
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardDeliveryNotesSentComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Recent Transactions'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/transactions'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 5
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardRecentTransactionsComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'Invoice Financing'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 7
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardServiceOfferingsComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 4
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 4
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 4
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 6
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 6
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 3
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
    this.cardsService.addCard(
      new DashboardCard(
        {
          name: {
            key: DashboardCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: DashboardCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: DashboardCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          cols: {
            key: DashboardCard.metadata.COLS,
            value: 9
          },
          rows: {
            key: DashboardCard.metadata.ROWS,
            value: 3
          },
          color: {
            key: DashboardCard.metadata.COLOR,
            value: 'blue'
          }
        }, DashboardUsersComponent
      )
    );
  }

}
