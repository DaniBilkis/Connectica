import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FxInvoicesComponent } from './fx-invoices.component';

describe('FxInvoicesComponent', () => {
  let component: FxInvoicesComponent;
  let fixture: ComponentFixture<FxInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FxInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FxInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
