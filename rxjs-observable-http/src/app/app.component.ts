import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// RxJS 임포트
import { Subscription, Observable, of, throwError } from 'rxjs';
import { debounceTime, switchMap, map, tap, catchError } from 'rxjs/operators';

interface GithubUser {
  login: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
    <h2>Observable Evenets</h2>
    <input
      type="text"
      placeholder="github userid를 입력해주세요"
      [formControl]="searchInput"
    />
    <pre>{{ githubUser | json }}</pre>
  `,
  styles: [],
})
export class AppComponent implements OnInit, OnDestroy {
  // 1. Angular forms
  searchInput: FormControl = new FormControl('');
  githubUser!: GithubUser;
  subscription!: Subscription;

  // 2. 서버와의 통신을 위해 HttpClient를 의존성 주입한다.
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // 1. 폼 컨트롤 값의 상태를 옵저버블 스트림으로 수신한다.
    this.subscription = this.searchInput.valueChanges
      .pipe(
        // 3. 옵저버블이 방출하는 데이터를 수신하는 시간을 지연시킨다.
        debounceTime(500),
        // 4. 새로운 옵저버블을 생성한다.
        switchMap((userId: string) => this.getGithubUser(userId))
      )
      // 6.옵저버블을 구독한다.
      .subscribe(
        (user) => (this.githubUser = user),
        (error) => console.log('error : ' + error)
      );
  } // end ngOnInit()

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // 5. 서버로부터 데이터를 응답받아 옵저버블을 반환한다.
  getGithubUser(userId: string): Observable<GithubUser> {
    return this.http
      .get<GithubUser>(`https://api.github.com/users/${userId}`)
      .pipe(
        map((user) => ({ login: user.login, name: user.name })),
        tap(console.log),
        // 7. error handling
        catchError((err, caught) => caught)
      );
  }
}
