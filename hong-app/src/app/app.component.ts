import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hong-app';

  // 자식 컴포넌트와 공유할 상태 정보
  usersParents: User[];

  constructor() {
    this.usersParents = [
      new User(1, 'hong', 'Administrator'),
      new User(2, 'park', 'Developer'),
      new User(3, 'Noh', 'Designer'),
    ];
  }

  // 사용자 추가
  addUser(name: string, role: string) {
    if (name && role) {
      this.usersParents = [
        ...this.usersParents,
        new User(this.getNextId(), name, role),
      ];
    }
  }

  // 새로운 사용자의 id를 취득
  getNextId(): number {
    return this.usersParents.length
      ? Math.max(...this.usersParents.map(({ id }) => id)) + 1
      : 1;
  }
}
