import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDeliveryNotesSentComponent } from './dashboard-delivery-notes-sent.component';

describe('DashboardDeliveryNotesSentComponent', () => {
  let component: DashboardDeliveryNotesSentComponent;
  let fixture: ComponentFixture<DashboardDeliveryNotesSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDeliveryNotesSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDeliveryNotesSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
