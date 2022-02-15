// 테스트용 가상 사용자 생성 서비스
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class MockUserService {
  // 테스트용 가상 사용자를 생성하여 반환
  getUser(): User {
    return new User('mock user', 'abc');
  }
}
