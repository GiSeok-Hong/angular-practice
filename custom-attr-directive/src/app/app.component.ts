import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- p요소에 어트리뷰트로 appTextBlue 디렉티브를 적용 -->
    <p appTextBlue>textBlue directive</p>
  `,
  styles: [],
})
export class AppComponent {
  title = 'custom-attr-directive';
}
