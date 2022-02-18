import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter</h2>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
  `,
  styles: [],
})
export class CounterComponent {
  @Input() count!: number;
  @Output() countChange = new EventEmitter();

  increment() {
    this.countChange.emit(++this.count);
  }

  decrement() {
    this.countChange.emit(--this.count);
  }
}
