import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <input type="text" [(ngModel)]="value" /> -->
    <!-- 지원이 중단된 기능임. -->
    <p>{{ value | reverse }}</p>
  `,
  styles: [],
})
export class AppComponent {
  value!: string;
}
