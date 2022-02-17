import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Todo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  // 서버에 모든 todo를 요청한다.
  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(catchError(this.handleError));
  }

  // 서버에 새로운 todo의 추가를 요청한다.
  add(content: string): Observable<Todo> {
    // 서버로 전송할 요청 페이로드, id는 json-server에 의해 자동 생성된다.
    const payload = { content, completed: false };
    return this.http
      .post<Todo>(this.url, payload)
      .pipe(catchError(this.handleError));
  }

  // 아이디가 일치하는 todo의 내용 전체를 갱신하도록 서버에 요청한다.
  change(todo: Todo) {
    // 서버로 전송할 요청 페이로드. PUT 요청은 해당 데이터 전체를 갱신한다.
    const payload = {
      content: 'Angular',
      completed: !todo.completed,
    };

    // 요청 url
    const url = `${this.url}/${todo.id}`;
    return this.http.put<Todo>(url, payload).pipe(catchError(this.handleError));
  }

  // 아이디가 일치하는 todo의 completed만 수정하도록 서버에 요청한다.
  toggle(todo: Todo) {
    // 서버로 전송할 요청 페이로드. PATCH 요청은 해당 데이터의 일부를 수정한다.
    const payload = {
      completed: !todo.completed,
    };

    // 요청 url
    const url = `${this.url}/${todo.id}`;
    return this.http
      .patch<Todo>(url, payload)
      .pipe(catchError(this.handleError));
  }

  // 아이디가 일치하는 todo를 삭제하도록 서버에 요청한다.
  remove(id: number) {
    // 요청 url
    const url = `${this.url}/${id}`;

    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // 에러 핸들러 함수
  private handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) {
      // 클라이언트 측의 에러
      console.error(`Client-side error : ${error.error.message}`);
      message = error.error.message;
    } else {
      // 백엔드 측의 에러
      console.error(`Server-side error : ${error.status}`);
      message = error.message;
    }

    // 사용자에게 전달할 메시지를 담은 옵저버블 반환
    return throwError({
      title: 'Something wrong! please try again later',
      message,
    });
  }
}
