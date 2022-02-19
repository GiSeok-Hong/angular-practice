import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './shared/header.component';

// HomeModule 임포트
import { HomeModule } from './home/home.module';
// import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, HomeModule // HomeModule 임포트
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
