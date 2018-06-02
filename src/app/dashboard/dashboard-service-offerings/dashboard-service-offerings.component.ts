import {Component, Injector, OnInit} from '@angular/core';
import { DashboardCard } from '../../_shared/dashboard-card';
import { AbstractDashboardCard } from '../../_shared/abstract-dashboard-card';
import { Invoice } from '../../_shared/invoice-interface';
import { INVOICES } from '../../_shared/data-invoices';

@Component({
  selector: 'app-dashboard-service-offerings',
  templateUrl: './dashboard-service-offerings.component.html',
  styleUrls: ['./dashboard-service-offerings.component.scss']
})
export class DashboardServiceOfferingsComponent extends AbstractDashboardCard implements OnInit {

  invoices: Invoice[];
  totalAmount = 137224.98;
  currency = 'EUR';

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
    this.invoices = INVOICES;
  }

}
