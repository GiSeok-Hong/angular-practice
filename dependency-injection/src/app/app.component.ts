import { Component } from '@angular/core';
import { AnotherGreetingService } from './another-greeting.service';
import { GreetingService } from './greeting.service';
@Component({
  selector: 'app-root',
  template: `
    <button (click)="sayHi()">Say Hi</button>
    <p>{{ greeting }}</p>
  `,
  styles: [],
})
export class AppComponent {
  greeting!: string;

  // 의존성 주입
  constructor(private greetingService: GreetingService) {
    console.log(greetingService instanceof AnotherGreetingService); // true
  }

  sayHi() {
    // 주입된 서비스의 사용
    this.greeting = this.greetingService.sayHi();
  }
}
