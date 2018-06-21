import { Component, OnInit } from '@angular/core';

import { AlertService } from '../_services';

@Component({
  // moduleId: module.id.toString(),
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent {
  message: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
  }

  cssClass( message ) {
    console.log( 'Here is the message -> ' + JSON.stringify( message ) );
    if (!message) {
      return;
    }

    // return css class based on alert type
    switch (message.type) {
      case 'success':
        return 'alerts-message-success';
      case 'error':
        return 'alerts-message-danger';
      case 'info':
        return 'alerts_message alert-info';
      case 'warning':
        return 'alerts_message alert-warning';
    }
  }
}
