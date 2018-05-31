import { Component, Injector, OnInit }      from '@angular/core';
import { DashboardCard }                    from '../../_shared/dashboard-card';
import { AbstractDashboardCard }            from '../../_shared/abstract-dashboard-card';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})
export class DashboardUsersComponent extends AbstractDashboardCard  implements OnInit {

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
