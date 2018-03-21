import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidetotableComponent } from './guidetotable.component';

describe('GuidetotableComponent', () => {
  let component: GuidetotableComponent;
  let fixture: ComponentFixture<GuidetotableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidetotableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidetotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
