import {Component, Injector, OnInit} from '@angular/core';
import {AbstractDashboardCard} from '../../_shared/abstract-dashboard-card';
import {DashboardCard} from '../../_shared/dashboard-card';

@Component({
  selector: 'app-dashboard-delivery-notes-sent',
  templateUrl: './dashboard-delivery-notes-sent.component.html',
  styleUrls: ['./dashboard-delivery-notes-sent.component.scss']
})
export class DashboardDeliveryNotesSentComponent extends AbstractDashboardCard implements OnInit {

  numberOfDeliveryNotesSent: number;

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
    this.numberOfDeliveryNotesSent = 18;
  }
}
