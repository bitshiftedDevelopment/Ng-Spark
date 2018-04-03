import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminConsoleComponent } from './blog-admin-console.component';

describe('BlogAdminConsoleComponent', () => {
  let component: BlogAdminConsoleComponent;
  let fixture: ComponentFixture<BlogAdminConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogAdminConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
