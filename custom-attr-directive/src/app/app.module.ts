import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextBlueDirective } from './text-blue.directive';
import { TextColorDirective } from './text-color.directive';
import { MyDirectiveDirective } from './my-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    TextBlueDirective,
    TextColorDirective,
    MyDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
