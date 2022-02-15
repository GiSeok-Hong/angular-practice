import { MockUserService } from './mock-user.service';
import { UserService } from './user.service';

// 팩토리 함수
const userServiceFactory = (isDev: boolean) =>
  isDev ? new MockUserService() : new UserService();

// 팩토리 프로바이더
export const UserServiceProvider = {
  // 최종적으로 생성될 인스턴스의 타입
  provide: UserService,

  // 인스턴스 생성을 담당할 팩토리 함수
  useFactory: userServiceFactory,

  // 팩토리 함수에 주입할 값 프로바이더의 토큰
  deps: ['isDev'],
};

// 팩토리 함수에 주입할 값의 프로바이더
export const IsDevProvider = {
  // 팩토리 함수에 주입할 값의 토큰
  provide: 'isDev',

  // 팩토리 함수에 주입할 값
  useValue: false,
};
