import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Needed to authenticate for managing articles
import { AuthModule } from '@app/auth/auth.module';

// Used to format blog posts
import { MaterialAppModule } from '@app/ngmat/ngmat.module';
import { FlexLayoutModule } from "@angular/flex-layout"; // No module really needed for this yet

import { PostcardComponent } from './postcard/postcard.component';
import { PostBrowserComponent } from './post-browser.component';
import { PostUploadFormComponent } from './post-upload-form/post-upload-form.component';
import { BlogAdminConsoleComponent } from './blog-admin-console/blog-admin-console.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    FlexLayoutModule
  ],
  declarations: [
    PostcardComponent,
    PostBrowserComponent,
    PostUploadFormComponent,
    BlogAdminConsoleComponent
  ]
})
export class BlogModule { }
