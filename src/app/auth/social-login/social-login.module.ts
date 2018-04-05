import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialAppModule } from '@app/ngmat/ngmat.module';
import { GoogleComponent } from './google/google.component';
import { GithubComponent } from './github/github.component';
import { FacebookComponent } from './facebook/facebook.component';
import { TwitterComponent } from './twitter/twitter.component';
import { SocialLoginComponent } from './social-login/social-login.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialAppModule
  ],
  exports: [
    GoogleComponent,
    GithubComponent,
    FacebookComponent,
    TwitterComponent,
    SocialLoginComponent
  ],
  declarations: [GoogleComponent,
    GithubComponent,
    FacebookComponent,
    TwitterComponent,
    SocialLoginComponent]
})
export class SocialLoginModule { }
