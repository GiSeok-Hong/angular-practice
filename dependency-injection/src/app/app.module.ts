import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetingService } from './greeting.service';
import { AnotherGreetingService } from './another-greeting.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      // 의존성 인스턴스의 타입(토큰, Token)
      provide: GreetingService,
      // 의존성 인스턴스를 생성할 클래스
      useClass: AnotherGreetingService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
