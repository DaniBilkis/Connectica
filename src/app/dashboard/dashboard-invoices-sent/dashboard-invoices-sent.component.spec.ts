import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInvoicesSentComponent } from './dashboard-invoices-sent.component';

describe('DashboardInvoicesSentComponent', () => {
  let component: DashboardInvoicesSentComponent;
  let fixture: ComponentFixture<DashboardInvoicesSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardInvoicesSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInvoicesSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
