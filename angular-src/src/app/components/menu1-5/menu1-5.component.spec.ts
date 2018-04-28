import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu15Component } from './menu1-5.component';

describe('Menu15Component', () => {
  let component: Menu15Component;
  let fixture: ComponentFixture<Menu15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


