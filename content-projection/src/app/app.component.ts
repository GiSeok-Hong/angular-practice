import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- 싱글 슬롯 콘텐트 프로젝션 -->
    <app-single-content-projection>
      <strong>Single-slot</strong><i>content projection</i>
    </app-single-content-projection>

    <br /><br /><br />
    <!-- 멀티 슬롯 콘텐트 프로젝션 -->
    <app-multi-content-projection>
      <div class="end">End Content</div>
      <footer>Footer Content</footer>
      <header>Header Content</header>
      <section>Section Content</section>
      <div class="my-class">div with .my-class</div>
      <div id="first">First Content</div>
    </app-multi-content-projection>
  `,
  styles: [],
})
export class AppComponent {}
