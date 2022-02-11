import { Component, OnInit, Input } from '@angular/core';
import { Checkbox } from '../app.component';
@Component({
  selector: 'app-child',
  template: `
    <input type="checkbox" [id]="checkbox.id" [checked]="checkbox.checked" />
    <label [for]="checkbox.id">{{ checkbox.label }}</label>
  `,
  styles: [],
})
export class ChildComponent implements OnInit {
  // 부모 컴포넌트가 직접 접근할 프로퍼티
  @Input() checkbox!: Checkbox;

  constructor() {}

  ngOnInit(): void {}
}
