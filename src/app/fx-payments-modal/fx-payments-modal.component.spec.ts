import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxPaymentsModalComponent } from './fx-payments-modal.component';

describe('FxPaymentsModalComponent', () => {
  let component: FxPaymentsModalComponent;
  let fixture: ComponentFixture<FxPaymentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxPaymentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxPaymentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
