import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestgailComponent } from './testgail.component';

describe('TestgailComponent', () => {
  let component: TestgailComponent;
  let fixture: ComponentFixture<TestgailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestgailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestgailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
