import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>child component</p>
    <p>부모 컴포넌트가 전달한 값 : {{ immutable }}</p>
    <p>부모 컴포넌트가 전달한 값 : {{ mutable | json }}</p>
  `,
  styles: [],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() immutable!: string;
  @Input() mutable!: object;
  prop = 'normal prop';

  constructor() {
    console.log('[construnctor]');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
    console.log('changes:', changes);
    console.log(`immutable : ${this.immutable}`);
    console.log(`mutable : `, this.mutable);
  }

  ngOnInit() {
    console.log('[OnInit]');
    console.log(`prop: ${this.prop}`);
    console.log(`immutable : ${this.immutable}`);
    console.log(`mutable : `, this.mutable);
  }

  ngDoCheck() {
    console.log('[DoCheck]');
    console.log(`immutable : ${this.immutable}`);
    console.log(`mutable : `, this.mutable);
  }

  ngAfterContentInit() {
    console.log('[ngAfterContentInit]');
  }

  ngAfterContentChecked() {
    console.log('[ngAfterContentChecked]');
  }

  ngAfterViewInit() {
    console.log('[ngAfterViewInit]');
  }

  ngAfterViewChecked() {
    console.log('[ngAfterViewChecked]');
  }

  ngOnDestroy() {
    console.log('[ngOnDestroy]');
  }
}
