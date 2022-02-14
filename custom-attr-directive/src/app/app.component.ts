import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- p요소에 어트리뷰트로 appTextBlue 디렉티브를 적용 -->
    <p appTextColor [color]="color1">textcolor directive</p>
    <h1 appTextBlue>textBlue directive h1</h1>
  `,
  styles: [],
})
export class AppComponent {
  title = 'custom-attr-directive';
  color1 = 'red';
}
