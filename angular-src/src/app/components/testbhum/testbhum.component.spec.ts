import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbhumComponent } from './testbhum.component';

describe('TestbhumComponent', () => {
  let component: TestbhumComponent;
  let fixture: ComponentFixture<TestbhumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbhumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbhumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
