import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// HomeComponent 임포트
import { HomeComponent } from './home.component';

// SharedModule 임포트
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ HomeComponent ], // HomeComponent 선언
  imports: [
    CommonModule, SharedModule
  ],
  providers: [],
  exports: [HomeComponent]  // HomeComponent 공개
})
export class HomeModule { }
