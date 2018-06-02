import {Component, Injector, OnInit} from '@angular/core';
import {DashboardCard} from '../../_shared/dashboard-card';
import {AbstractDashboardCard} from '../../_shared/abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-service-offerings',
  templateUrl: './dashboard-service-offerings.component.html',
  styleUrls: ['./dashboard-service-offerings.component.scss']
})
export class DashboardServiceOfferingsComponent extends AbstractDashboardCard implements OnInit {

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
