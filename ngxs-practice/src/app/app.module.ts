import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';

@NgModule({
  declarations: [AppComponent, ZooComponent],
  imports: [BrowserModule, NgxsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
