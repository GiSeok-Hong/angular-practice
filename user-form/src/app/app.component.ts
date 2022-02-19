import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-user-form></app-user-form>
    <br /><br /><br />
    <app-counter [(count)]="value"></app-counter>
    <p>Value : {{ value }}</p>
    <br><br><br>
    <input type="text" name="title" ngModel #title="ngModel" pattern="[a-zA-Z0-9]{4,10}" required>
    <em *ngIf="title.errors?.['required'] && title.touched">
      title을 입력하세요!
    </em>

    <p>errors:  {{ title.errors | json }}</p>
    <p>invalid: {{ title.invalid }}</p>
    <p>dirty:   {{ title.dirty }}</p>
    <p>touched: {{ title.touched }}</p>
    <p>pristine: {{ title.pristine }}</p>
  `,
  styles: [],
})
export class AppComponent {
  value = 7;
}
