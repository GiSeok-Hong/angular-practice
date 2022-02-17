import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo.content }}</li>
    </ul>
    <pre>{{ todos | json }}</pre>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  todos!: Todo[];
  url = 'http://loaclhost:3000/todos';

  // HttpClient를 컴포넌트에 주입
  constructor(public http: HttpClient) {}

  ngOnInit() {
    // 쿼리 파라미터 생성
    const params = new HttpParams().set('id', '1').set('completed', 'false');

    // HTTP GET 요청
    // this.http.get(this.url).subscribe(todos => this.todos = todos);
    /*
        요청 결과를 프로퍼티에 할당한다.
        get 메소드는 Observable<Object>를 반환한다.
        이때 타입이 일치하지 않기 때문에 컴파일 에러가 발생한다.
      */

    this.http
      .get<Todo[]>(this.url, { params })
      .subscribe((todos) => (this.todos = todos));
    // 요청 결과를 프로퍼티에 할당한다. get 메소드는 Observable<Todo[]>를 반환한다.
  }
}
