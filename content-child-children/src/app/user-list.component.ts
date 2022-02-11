import {
  Component,
  OnInit,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { UserComponent } from './user.component';

@Component({
  selector: 'app-user-list',
  template: `
    <div>
      <ng-content></ng-content>
    </div>
    <button (click)="changeFirstUserColor()">첫 번째 사용자 배경색 변경</button>
    <button (click)="changeAllUserColor()">모든 사용자 배경색 변경</button>
  `,
  styles: [],
})
export class UserListComponent implements OnInit {
  // 부모 컴포넌트가 지정한 콘텐츠 중에서 템플릿 참조 변수 first를 가진 콘텐츠를 취득한다.
  @ContentChild('first') firstChild!: UserComponent;

  // 부모 컴포넌트가 지정한 콘텐츠 중에서 UserComponent 모두를 취득한다.
  @ContentChildren(UserComponent) children!: QueryList<UserComponent>;

  /*
    ngAfterViewInit은 뷰 초기화가 종료됐을 때 실행되는 컴포넌트 생명주기 메소드이다.
    @ContentChild, @ContentChildren ngAfterViewInit 이전에 초기화된다.
    ngAfterViewInit에서 참조하는 것이 안전하다.
  */
  ngAfterContentInit() {
    console.log(this.firstChild);
    this.children.forEach((child) => console.log(child));
  }

  changeFirstUserColor() {
    this.firstChild.randomizeColor();
  }

  changeAllUserColor() {
    this.children.forEach((child) => child.randomizeColor());
  }
  constructor() {}

  ngOnInit(): void {}
}
