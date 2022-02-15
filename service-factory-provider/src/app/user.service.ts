// 사용자 생성 서비스
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
  // 실제 사용자를 생성하여 반환
  getUser(): User {
    return new User('real user', '123');
  }
}
