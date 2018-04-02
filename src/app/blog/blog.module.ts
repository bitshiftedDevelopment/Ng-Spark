import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Needed to authenticate for managing articles
import { AuthModule } from '@app/auth/auth.module';

// Used to format blog posts
import { MaterialAppModule } from '@app/ngmat/ngmat.module';

import { PostcardComponent } from './postcard/postcard.component';
import { PostBrowserComponent } from './post-browser.component';
import { PostUploadFormComponent } from './post-upload-form/post-upload-form.component'; // Firebase authentication service
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialAppModule
  ],
  declarations: [PostcardComponent, PostBrowserComponent, PostUploadFormComponent]
})
export class BlogModule { }
