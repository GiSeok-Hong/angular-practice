import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SingleContentProjectionComponent } from './single-content-projection.component';
import { MultiContentProjectionComponent } from './multi-content-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleContentProjectionComponent,
    MultiContentProjectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
