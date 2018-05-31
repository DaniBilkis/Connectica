import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrdersReceivedComponent } from './dashboard-orders-received.component';

describe('DashboardOrdersReceivedComponent', () => {
  let component: DashboardOrdersReceivedComponent;
  let fixture: ComponentFixture<DashboardOrdersReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOrdersReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOrdersReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
