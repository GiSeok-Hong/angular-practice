import { Injectable } from '@angular/core';

@Injectable() // @Injectable 프로바이더 삭제
export class GreetingService {
  sayHi() {
    return 'hi hong!';
  }
}
