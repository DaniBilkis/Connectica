import {Component, Injector, OnInit}  from '@angular/core';
import {AbstractDashboardCard}        from '../../_shared/abstract-dashboard-card';
import {DashboardCard}                from '../../_shared/dashboard-card';
import { TRANSACTIONS }               from '../../_shared/data-transactions';
import { TransactionDetails }         from '../../_shared/transaction-details/transaction-details';

@Component({
  selector: 'app-dashboard-recent-transactions',
  templateUrl: './dashboard-recent-transactions.component.html',
  styleUrls: ['./dashboard-recent-transactions.component.scss']
})
export class DashboardRecentTransactionsComponent extends AbstractDashboardCard implements OnInit {

  transactions: TransactionDetails [];

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
    this.transactions = TRANSACTIONS;
  }

}
