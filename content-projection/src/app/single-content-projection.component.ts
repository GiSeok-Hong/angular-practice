import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-content-projection',
  template: `
    <h3>single-content-projection</h3>
    <div>
      <!-- ng-content는 부모 컴포넌트가 지정한 콘텐츠와 치환된다. -->
      <ng-content></ng-content>
    </div>
  `,
  styles: [],
})
export class SingleContentProjectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
