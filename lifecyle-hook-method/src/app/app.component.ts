import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="status = !status">
      {{ status ? 'Destry Child' : 'Create Child' }}
    </button>
    <app-child *ngIf="status"></app-child>
  `,
  styles: [],
})
export class AppComponent {
  status = false;
  prop = 'hello';
}
