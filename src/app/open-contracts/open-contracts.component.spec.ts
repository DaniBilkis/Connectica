import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenContractsComponent } from './open-contracts.component';

describe('OpenContractsComponent', () => {
  let component: OpenContractsComponent;
  let fixture: ComponentFixture<OpenContractsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenContractsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
