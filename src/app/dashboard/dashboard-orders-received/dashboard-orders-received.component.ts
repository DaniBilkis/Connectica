import {Component, Injector, OnInit} from '@angular/core';
import {DashboardCard} from '../../_shared/dashboard-card';
import {AbstractDashboardCard} from '../../_shared/abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-orderes-received',
  templateUrl: './dashboard-orders-received.component.html',
  styleUrls: ['./dashboard-orders-received.component.scss']
})
export class DashboardOrdersReceivedComponent extends AbstractDashboardCard implements OnInit {

  numberOfOrdersReceived: number;

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
    this.numberOfOrdersReceived = 25;
  }


}
