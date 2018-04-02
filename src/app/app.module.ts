import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

// Main routing module
import { AppRoutingModule } from './app-routing.module';
// App root component
import { AppComponent } from './app.component';
// DemoModule containing Angular starter project
import { DemoModule } from './demo/demo.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
