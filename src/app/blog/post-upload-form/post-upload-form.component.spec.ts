import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUploadFormComponent } from './post-upload-form.component';

describe('PostUploadFormComponent', () => {
  let component: PostUploadFormComponent;
  let fixture: ComponentFixture<PostUploadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUploadFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUploadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
