import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

interface ErrorMessage {
  title: string;
  message: string;
}

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
    <h3 class="title">{{ error.title }}</h3>
    <p class="message">{{ error.message }}</p>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  todos!: Todo[];
  error!: ErrorMessage;
  // url = 'http://localhost:3000/todos';
  // 에러를 발생시키고자 잘못된 url 을 제공
  url = 'http://localhost:3000/todosX';

  // HttpClient를 컴포넌트에 주입
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Todo[]>(this.url)
      .pipe(
        // 에러 처리 후 에러 메시지를 생성하여 이를 방출하는 옵저버블 반환
        catchError(this.handleError)
      )
      .subscribe(
        // 요청 성공 처리 (옵저버의 next 메소드)
        (todos) => (this.todos = todos),
        // 에러 처리(옵저버의 error 메소드)
        (error: ErrorMessage) => (this.error = error)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let message = '';

    // 1. 에러 유형 구분
    if (error.error instanceof ErrorEvent) {
      // 클라이언트 측의 에러
      console.error(`Client-side error : ${error.error.message}`);
      message = error.error.message;
    } else {
      // 백엔드 측의 에러
      console.error(`Server-side error : ${error.status}`);
      message = error.message;
    }

    // 2. 사용자에게 전달할 메시지를 담은 옵저버블 반환
    return throwError({
      title: `Something Wrong! please try again later`,
      message,
    });
  }
}
