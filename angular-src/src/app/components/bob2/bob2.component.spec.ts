import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bob2Component } from './bob2.component';

describe('Bob2Component', () => {
  let component: Bob2Component;
  let fixture: ComponentFixture<Bob2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bob2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bob2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
