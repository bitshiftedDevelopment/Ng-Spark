import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Main routing module
import { AppRoutingModule } from './app-routing.module';
// App root component
import { AppComponent } from './app.component';
// DemoModule containing Angular starter project
import { DemoModule } from './demo/demo.module';

import { FlexLayoutModule } from "@angular/flex-layout"; // No module really needed for this yet


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
