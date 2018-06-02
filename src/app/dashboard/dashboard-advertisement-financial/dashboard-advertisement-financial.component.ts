import {Component, Injector, OnInit} from '@angular/core';
import {AbstractDashboardCard} from '../../_shared/abstract-dashboard-card';
import {DashboardCard} from '../../_shared/dashboard-card';

@Component({
  selector: 'app-dashboard-advertisement-financial',
  templateUrl: './dashboard-advertisement-financial.component.html',
  styleUrls: ['./dashboard-advertisement-financial.component.scss']
})
export class DashboardAdvertisementFinancialComponent extends AbstractDashboardCard implements OnInit {

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
  }

}
