import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user-list>
      <app-user #first>hong</app-user>
      <app-user>park</app-user>
      <app-user>noh</app-user>
    </app-user-list>
  `,
  styles: [],
})
export class AppComponent {}
