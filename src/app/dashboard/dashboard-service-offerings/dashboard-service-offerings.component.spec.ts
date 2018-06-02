import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardServiceOfferingsComponent } from './dashboard-service-offerings.component';

describe('DashboardServiceOfferingsComponent', () => {
  let component: DashboardServiceOfferingsComponent;
  let fixture: ComponentFixture<DashboardServiceOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardServiceOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardServiceOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
