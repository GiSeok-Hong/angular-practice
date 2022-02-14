import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todos.component';

@Pipe({
  name: 'limit',

  // pure 프로퍼티의 값에 따라 순수/비순수 파이프가 정해진다.
  pure: false, // 비순수 파이프
})
export class LimitPipe implements PipeTransform {
  transform(todos: Todo[], limit: number): Todo[] {
    return todos.filter((el, i) => i < limit);
  }
}
