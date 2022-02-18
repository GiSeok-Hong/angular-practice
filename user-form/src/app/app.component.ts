import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user-form></app-user-form>
    <br /><br /><br />
    <app-counter [(count)]="value"></app-counter>
    <p>Value : {{ value }}</p>
  `,
  styles: [],
})
export class AppComponent {
  value = 7;
}
