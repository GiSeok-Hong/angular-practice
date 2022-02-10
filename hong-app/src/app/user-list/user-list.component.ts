import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // @Input 데코레이터 바로 뒤의 프로퍼티명 users와 부모 컴포넌트에서 실행한 프러포티 바인딩의 프로퍼티명 users는 반드시 일치해야 한다.
  // @Input() usersChild!: User[];

  //
  _usersChild!: User[];

  // 역할별 사용자 카운터
  cntAdmin!: number;
  cntDeveloper!: number;
  cntDesigner!: number;

  // 부모 컴포넌트가 전달한 정보에서 필요한 정보를 추출하여 컴포넌트 프로퍼티에 바인딩한다.
  @Input()
  set usersChildSet(users: User[]) {
    if (!users) {
      return;
    }

    this.cntAdmin = users.filter(({ role }) => role === 'Administrator').length;
    this.cntDeveloper = users.filter(({ role }) => role === 'Developer').length;
    this.cntDesigner = users.filter(({ role }) => role === 'Designer').length;

    this._usersChild = users;
  }

  get users(): User[] {
    return this._usersChild;
  }

  constructor() {}

  ngOnInit(): void {}
}
