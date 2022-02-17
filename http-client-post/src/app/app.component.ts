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
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
  styles: [],
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
}
