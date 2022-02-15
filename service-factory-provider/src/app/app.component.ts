import { Component } from '@angular/core';
import { IsDevProvider, UserServiceProvider } from './user.service.provider';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  template: ` {{ userService.getUser() | json }}`,
  styles: [],
  providers: [
    IsDevProvider, // 팩토리 함수에 주입할 값의 프로바이더
    UserServiceProvider, // 팩토리 프로바이더
  ],
})
export class AppComponent {
  constructor(public userService: UserService) {
    console.log(userService.getUser()); // { "id": "real user", "password": "123" }
  }
}
