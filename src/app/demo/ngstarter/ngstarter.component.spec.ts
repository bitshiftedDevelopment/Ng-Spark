import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgstarterComponent } from './ngstarter.component';

describe('NgstarterComponent', () => {
  let component: NgstarterComponent;
  let fixture: ComponentFixture<NgstarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgstarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgstarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
