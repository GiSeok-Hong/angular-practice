import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <p [style.background-color]="color">
      <ng-content></ng-content>
    </p>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  colors = ['yellow', 'chartreuse', 'crimson', 'yellowgreen', 'orange'];
  color = this.colors[0];

  randomizeColor() {
    this.color = this.colors[Math.floor(Math.random() * 5)];
  }

  constructor() {}

  ngOnInit(): void {}
}
