import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-sibling1></app-sibling1>
    <app-sibling2></app-sibling2>
  `,
  styles: [],
})
export class AppComponent {
  title = 'data-mediator';
}
