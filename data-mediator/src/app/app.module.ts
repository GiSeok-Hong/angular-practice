import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Sibling1Component } from './sibling1.component';
import { Sibling2Component } from './sibling2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sibling1Component,
    Sibling2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
