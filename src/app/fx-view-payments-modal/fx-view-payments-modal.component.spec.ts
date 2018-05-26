import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxViewPaymentsModalComponent } from './fx-view-payments-modal.component';

describe('FxViewPaymentsModalComponent', () => {
  let component: FxViewPaymentsModalComponent;
  let fixture: ComponentFixture<FxViewPaymentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxViewPaymentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxViewPaymentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
