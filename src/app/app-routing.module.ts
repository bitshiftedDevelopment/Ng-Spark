import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Starter Component
import { NgstarterComponent } from './demo/ngstarter/ngstarter.component';
// Blog Components
import { PostBrowserComponent } from './blog/post-browser.component';
import { PostcardComponent } from './blog/postcard/postcard.component';
import { BlogAdminConsoleComponent } from './blog/blog-admin-console/blog-admin-console.component';

const routes: Routes = [
  {
    path: '',
    component: NgstarterComponent
  },
  {//INDEV
    path: 'blog',
    component: PostBrowserComponent,
  },
  {//INDEV
    path: 'post/:id',
    component: PostcardComponent
  },
  {//INDEV
    path: 'blog-admin',
    component: BlogAdminConsoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
