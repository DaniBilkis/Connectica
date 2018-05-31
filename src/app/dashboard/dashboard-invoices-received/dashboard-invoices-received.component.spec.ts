import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvoicesReceivedComponent } from './dashboard-invoices-received.component';

describe('DashboardInvoicesReceivedComponent', () => {
  let component: DashboardInvoicesReceivedComponent;
  let fixture: ComponentFixture<DashboardInvoicesReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInvoicesReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInvoicesReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
