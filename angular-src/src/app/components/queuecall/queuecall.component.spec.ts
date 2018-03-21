import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuecallComponent } from './queuecall.component';

describe('QueuecallComponent', () => {
  let component: QueuecallComponent;
  let fixture: ComponentFixture<QueuecallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueuecallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueuecallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
