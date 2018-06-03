import { Component, Injector, OnInit }  from '@angular/core';
import { AbstractDashboardCard }        from '../../_shared/abstract-dashboard-card';
import { DashboardCard }                from '../../_shared/dashboard-card';
import { Chart }                        from 'chart.js';

@Component({
  selector: 'app-dashboard-payment-calendar-chart',
  templateUrl: './dashboard-payment-calendar-chart.component.html',
  styleUrls: ['./dashboard-payment-calendar-chart.component.scss']
})
export class DashboardPaymentCalendarChartComponent extends AbstractDashboardCard implements OnInit {


  chart = []; // This will hold our chart info

  // constructor( private _weather: WeatherService ) {}

  constructor(private injector: Injector) {
    super(injector.get(DashboardCard.metadata.NAME),
      injector.get(DashboardCard.metadata.ROUTERLINK),
      injector.get(DashboardCard.metadata.ICONCLASS),
      injector.get(DashboardCard.metadata.COLS),
      injector.get(DashboardCard.metadata.ROWS),
      injector.get(DashboardCard.metadata.COLOR));
  }

  ngOnInit() {
    this.chart = new Chart('payment_calendar_chart', {
      type: 'bar',
      data: {
        labels: ['6/3', '6/4', '6/5', '6/10', '6/11', '6/12', '6/13', '6/14', '6/15', '6/18', '6/19', '6/20', '6/23', '6/24', '6/25', '6/30', '7/1', '7/2'],
        datasets: [
          {
            data: [12456, 13456, 13456, 'NaN', 'NaN', 30321, 12456, 13456, 78456, 'NaN', 'NaN', 30321, 12456, 13456, 78456, 'NaN', 'NaN', 30321],
            backgroundColor: '#f44336',
            borderColor: '#f44336',
            borderWidth: 1
          },
          {
            data: ['NaN', 'NaN', 'NaN', -34567, -35567, 'NaN', 'NaN', 'NaN', 'NaN', -34567, -45567, 'NaN', 'NaN', 'NaN', 'NaN', -34567, -25567, 'NaN'],
            backgroundColor: '#3c3c3c',
            borderColor: '#3c3c3c',
            borderWidth: 1
          }
          /*,
          {
            data: [12456, 13456, 78456, -34567, -65567, 30321, 12456, 13456, 78456, -34567, -65567, 30321, 12456, 13456, 78456, -34567, -65567, 30321],
            type: 'line',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 1
          }
          */
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
              callback: function(value, index, values) {
                if(parseInt(value) >= 1000){
                  return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                } else {
                  return '$' + value;
                }
              }
            }
          }],
        }
      }
    });
  }


}
