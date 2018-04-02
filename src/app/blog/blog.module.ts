import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Needed to authenticate for managing articles
import { AuthModule } from '@app/auth/auth.module';

// Used to format blog posts
import { MaterialAppModule } from '@app/ngmat/ngmat.module';

import { PostcardComponent } from './postcard/postcard.component';
import { PostBrowserComponent } from './post-browser.component'; // Firebase authentication service
@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [PostcardComponent, PostBrowserComponent]
})
export class BlogModule { }
