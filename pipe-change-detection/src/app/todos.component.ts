import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  template: `
    <input type="text" #todo />
    <button (click)="add(todo.value)">add</button>
    <ul>
      <li
        *ngFor="let todo of todos"
        (click)="complete(todo.id)"
        [class.completed]="todo.completed"
      >
        {{ todo.content }}
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
export class TodosComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, content: 'Html', completed: false },
    { id: 2, content: 'css', completed: false },
    { id: 3, content: 'javascript', completed: false },
  ];

  add(content: string) {
    this.todos.push({
      id: this.getNextId(),
      content,
      completed: false,
    });
  }

  complete(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  private getNextId(): number {
    return !this.todos.length
      ? 1
      : Math.max(...this.todos.map(({ id }) => id)) + 1;
  }

  constructor() {}

  ngOnInit(): void {}
}
