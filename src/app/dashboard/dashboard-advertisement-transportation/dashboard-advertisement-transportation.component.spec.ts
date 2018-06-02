import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdvertisementTransportationComponent } from './dashboard-advertisement-transportation.component';

describe('DashboardAdvertisementTransportationComponent', () => {
  let component: DashboardAdvertisementTransportationComponent;
  let fixture: ComponentFixture<DashboardAdvertisementTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAdvertisementTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdvertisementTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
