import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPaymentCalendarChartComponent } from './dashboard-payment-calendar-chart.component';

describe('DashboardPaymentCalendarChartComponent', () => {
  let component: DashboardPaymentCalendarChartComponent;
  let fixture: ComponentFixture<DashboardPaymentCalendarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPaymentCalendarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPaymentCalendarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
