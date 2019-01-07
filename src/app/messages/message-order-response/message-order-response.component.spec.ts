import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageOrderResponseComponent } from './message-order-response.component';

describe('MessageOrderResponseComponent', () => {
  let component: MessageOrderResponseComponent;
  let fixture: ComponentFixture<MessageOrderResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageOrderResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageOrderResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
