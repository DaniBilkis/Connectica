import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTreeComponent } from './transaction-tree.component';

describe('TransactionTreeComponent', () => {
  let component: TransactionTreeComponent;
  let fixture: ComponentFixture<TransactionTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
