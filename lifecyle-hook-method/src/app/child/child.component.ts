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
    <p>부모 컴포넌트가 전달한 값 : {{ prop }}</p>
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
  @Input() prop!: string;

  constructor() {
    console.log('[construnctor]');
    console.log(`prop: ${this.prop}`);
    this.prop = 'TEST';
    console.log(`prop: ${this.prop}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('[OnChanges]');
    console.log(`prop: ${this.prop}`);
    console.log('changes:', changes);
  }

  ngOnInit() {
    console.log('[OnInit]');
    console.log(`prop: ${this.prop}`);
  }

  ngDoCheck() {
    console.log('[DoCheck]');
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
