import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueueresultComponent } from './queueresult.component';

describe('QueueresultComponent', () => {
  let component: QueueresultComponent;
  let fixture: ComponentFixture<QueueresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
