import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxMakePaymentsModalComponent } from './fx-make-payments-modal.component';

describe('FxMakePaymentsModalComponent', () => {
  let component: FxMakePaymentsModalComponent;
  let fixture: ComponentFixture<FxMakePaymentsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxMakePaymentsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxMakePaymentsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
