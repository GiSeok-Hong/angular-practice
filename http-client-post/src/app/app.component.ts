import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  template: `
    <input type="text" [(ngModel)]="content" placeholder="todo" />
    <button (click)="addTodo()">Add</button>
    <ul>
      <li *ngFor="let todo of todos" [class.completed]="!todo.completed">
        {{ todo.content }}
        <button (click)="changeTodo(todo)">change</button>
        <button (click)="toggleTodo(todo)">toggle</button>
      </li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
  styles: [
    `
      .completed {
        text-decoration: line-through;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  todos!: Todo[];
  content!: string;

  constructor(private todo: TodoService) {}

  ngOnInit() {
    // 모든 todo를 획득하여 템플릿에 제공한다.
    this.todo.getAll().subscribe(
      (todos) => (this.todos = todos),
      (error) => console.error('[TodoService.getAll]', error)
    );
  }

  // 새로운 todo를 생성하고 생성된 todo를 todos 프로퍼티에 추가하여 템플릿에 반영한다.
  addTodo() {
    if (!this.content) {
      return;
    }
    this.todo.add(this.content).subscribe(
      (todo) => (this.todos = [...this.todos, todo]),
      (error) => console.error('[TodoService.add]', error)
    );
    this.content = '';
  }

  // todo의 내용 전체를 갱신하여 템플릿에 반영한다.
  changeTodo(todo: Todo) {
    this.todo.change(todo).subscribe(
      (newTodo) =>
        (this.todos = this.todos.map((todo) =>
          todo.id === newTodo.id ? newTodo : todo
        )),
      (error) => console.error('[TodoService.change]', error)
    );
  }

  // todo의 completed만을 수정하여 템플릿에 반영한다.
  toggleTodo(todo: Todo) {
    this.todo.toggle(todo).subscribe(
      (newTodo) =>
        (this.todos = this.todos.map((todo) =>
          todo.id === newTodo.id ? newTodo : todo
        )),
      (error) => console.error('[TodoService.toggle]', error)
    );
  }
}
