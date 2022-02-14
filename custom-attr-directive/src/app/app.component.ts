import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Attribute Directive</h1>
    <h1 appTextBlue>textBlue directive h1</h1>
    <button appMyDirective [inputValue]="msg" staticValue="hi!">
      Click Me
    </button>

    <h4>텍스트의 컬러를 선택하세요</h4>

    <div>
      <input type="radio" name="colors" (click)="color = 'red'" />Red
      <input type="radio" name="colors" (click)="color = 'blue'" />Blue
      <input type="radio" name="colors" (click)="color = 'green'" />Green
    </div>

    <p [appTextColor]="color" defaultColor="violet">Text Color</p>
  `,
  styles: [],
})
export class AppComponent {
  title = 'custom-attr-directive';

  msg = 'button click';

  color!: string;
}
