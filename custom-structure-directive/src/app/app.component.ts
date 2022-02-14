import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2 *appMyNgIf="condition">Hello {{ name }}</h2>
    <button (click)="condition = !condition">Click</button>
  `,
  styles: [],
})
export class AppComponent {
  condition: boolean = false;
  name: string = 'hong';
}
