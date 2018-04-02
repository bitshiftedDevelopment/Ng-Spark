import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgstarterComponent } from './demo/ngstarter/ngstarter.component';
import { ArticlelistComponent } from './blog/articlelist/articlelist.component';
import { ArticlecardComponent } from './blog/articlecard/articlecard.component';
const routes: Routes = [
  {
    path: '',
    component: NgstarterComponent
  },
  {//INDEV
    path: 'blog',
    component: ArticlelistComponent
  },
  {//INDEV
    path: 'blog/post/:id',
    component: ArticlecardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
