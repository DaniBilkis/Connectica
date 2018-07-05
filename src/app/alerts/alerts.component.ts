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
  cssMainDivClassName: any;
  cssFirstChildDivClassName: any;
  icon: any;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => {
      this.message = message;
      this.cssClass( this.message );
    });
  }

  cssClass( message ) {
    console.log( 'Here is the message -> ' + JSON.stringify( message ) );
    if (!message) {
      return;
    }
/*
    const classes =  {
      alertsMessageSuccess: message.type === 'success',
      alertsMessageDanger: message.type === 'error'
    };

    return classes;
    */
    // return css class based on alert type

    switch (message.type) {
      case 'success':
        this.cssFirstChildDivClassName = 'first-div-success';
        this.icon = 'check_circle';
        break;
      case 'error':
        this.cssFirstChildDivClassName = 'first-div-error';
        this.icon = 'error';
        break;
      case 'info':
        this.cssFirstChildDivClassName = 'first-div-info';
        this.icon = 'info';
        break;
      case 'warning':
        this.cssFirstChildDivClassName = 'first-div-warning';
        this.icon = 'info';
        break;
    }
  }
}
