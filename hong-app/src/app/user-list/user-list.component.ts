import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  // @Input 데코레이터 바로 뒤의 프로퍼티명 users와 부모 컴포넌트에서 실행한 프러포티 바인딩의 프로퍼티명 users는 반드시 일치해야 한다.
  @Input() usersChild!: User[];

  constructor() {}

  ngOnInit(): void {}
}
