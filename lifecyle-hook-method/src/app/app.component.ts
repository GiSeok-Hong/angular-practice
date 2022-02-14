import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="status = !status">
      {{ status ? 'Destry Child' : 'Create Child' }}
    </button>
    <div *ngIf="status">
      <button (click)="immutable = 'hihihihihi'">
        기본 자료형 프로퍼티 변경
      </button>
      <button (click)="mutable.name = 'giseok'">객체형 프로퍼티 변경</button>

      <app-child [immutable]="immutable" [mutable]="mutable"></app-child>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  status = false;
  immutable = 'hello';
  mutable = { name: 'hong' };
}
