import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservequeueComponent } from './reservequeue.component';

describe('ReservequeueComponent', () => {
  let component: ReservequeueComponent;
  let fixture: ComponentFixture<ReservequeueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservequeueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservequeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
