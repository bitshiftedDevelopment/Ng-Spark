import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAppModule } from '@app/ngmat/ngmat.module';
import { FlexLayoutModule } from "@angular/flex-layout"; // No module really needed for this yet

import { NgstarterComponent } from './ngstarter/ngstarter.component'; // Angular starter component
import { AuthModule } from '@app/auth/auth.module'; // Firebase authentication service
import { BlogModule } from '@app/blog/blog.module';
import { SocialLoginModule } from '@app/auth/social-login/social-login.module';
@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule, // importing this provides components for all things Material Design
    FlexLayoutModule, // importing this provides Angular directives for flex-layout
    AuthModule, // importing this gives access to the auth service
    BlogModule, // importing this provies all the components needed to make a blog
    SocialLoginModule // importing this provides material buttons for social provider logins
  ],
  exports: [
    NgstarterComponent // We export the component so it can be used by importing this module
  ],
  declarations: [NgstarterComponent]
})
export class DemoModule { }
