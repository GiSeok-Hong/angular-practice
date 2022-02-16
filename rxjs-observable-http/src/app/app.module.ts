import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// FormControl 클래스 사용을 위해 ReactiveFormsModule을 임포트
import { ReactiveFormsModule } from '@angular/forms';

// HttpClient 클래스 사용을 위해 HttpClientModule을 임포트
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
