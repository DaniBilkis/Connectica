import { Component, Injector, OnInit } from '@angular/core';
import { DashboardCard }               from '../../_shared/dashboard-card';
import { AbstractDashboardCard }       from '../../_shared/abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-invoices-received',
  templateUrl: './dashboard-invoices-received.component.html',
  styleUrls: ['./dashboard-invoices-received.component.scss']
})
export class DashboardInvoicesReceivedComponent extends AbstractDashboardCard implements OnInit {

  numberOfReceivedInvoices: number;
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
    this.numberOfReceivedInvoices = 18;
    this.totalAmount = 56358.12;
    this.currency = 'EUR';
  }

}
