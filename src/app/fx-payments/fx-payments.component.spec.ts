import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxPaymentsComponent } from './fx-payments.component';

describe('FxPaymentsComponent', () => {
  let component: FxPaymentsComponent;
  let fixture: ComponentFixture<FxPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
