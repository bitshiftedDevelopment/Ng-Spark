import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Needed to authenticate for managing articles
import { AuthModule } from '@app/auth/auth.module';

// Used to format blog posts
import { MaterialAppModule } from '@app/ngmat/ngmat.module';

import { ArticlecardComponent } from './articlecard/articlecard.component';
import { ArticlelistComponent } from './articlelist/articlelist.component'; // Firebase authentication service
@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  declarations: [ArticlecardComponent, ArticlelistComponent]
})
export class BlogModule { }
