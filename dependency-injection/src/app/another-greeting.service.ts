import { Injectable } from '@angular/core';

@Injectable()
export class AnotherGreetingService {
  sayHi() {
    return '안녕하세요 호호호';
  }
  constructor() {}
}
