import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdvertisementFinancialComponent } from './dashboard-advertisement-financial.component';

describe('DashboardAdvertisementFinancialComponent', () => {
  let component: DashboardAdvertisementFinancialComponent;
  let fixture: ComponentFixture<DashboardAdvertisementFinancialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdvertisementFinancialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdvertisementFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
