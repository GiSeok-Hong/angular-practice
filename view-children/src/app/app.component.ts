import { Component, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

export interface Checkbox {
  id: number;
  label: string;
  checked: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <h3>Parent</h3>
    <button type="button" (click)="toggle()">Toggle Child</button>

    <div *ngFor="let checkbox of checkboxes">
      <app-child [checkbox]="checkbox"></app-child>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  checkboxes: Checkbox[] = [
    { id: 1, label: 'html', checked: true },
    { id: 2, label: 'css', checked: false },
    { id: 3, label: 'js', checked: false },
  ];
  active = false;

  // @ViewChildren 데코레이터는 여러 개의 자식 요소를 취득한다
  // 이때 취득된 자식 요소를 바인딩할 프로퍼티의 타입은 QueryList이다
  @ViewChildren(ChildComponent) myChildren!: QueryList<ChildComponent>;

  toggle() {
    this.active = !this.active;

    // 자식 컴포넌트들을 순회하며 자식 컴포넌트의 공개된 프로퍼티 checkbox 를 변경한다.
    // QueryList는 마치 자바스크립트 배열과 같이 사용할 수 있다.
    this.myChildren.forEach((child) => (child.checkbox.checked = this.active));
  }
}
