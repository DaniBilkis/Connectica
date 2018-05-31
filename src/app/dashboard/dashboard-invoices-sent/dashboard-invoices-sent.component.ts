import {Component, Injector, OnInit} from '@angular/core';
import {DashboardCard} from '../../_shared/dashboard-card';
import {AbstractDashboardCard} from '../../_shared/abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-invoices-sent',
  templateUrl: './dashboard-invoices-sent.component.html',
  styleUrls: ['./dashboard-invoices-sent.component.scss']
})
export class DashboardInvoicesSentComponent extends AbstractDashboardCard implements OnInit {

  numberOfSentInvoices: number;
  totalAmount: number;
  currency: string;

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
    this.numberOfSentInvoices = 23;
    this.totalAmount = 32452.67;
    this.currency = 'EUR';
  }

}
