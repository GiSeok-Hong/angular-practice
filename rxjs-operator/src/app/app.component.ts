import { Component, OnInit, OnDestroy } from '@angular/core';

// RxJS 임포트
import { Observable, Subscription, from } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: ` <p>{{ values }}</p> `,
  styles: [],
})
export class AppComponent implements OnInit, OnDestroy {
  myArray = [1, 2, 3, 4, 5];
  subscription!: Subscription;
  values: number[] = [];

  ngOnInit() {
    // 1. 옵저버블 생성
    const observable$ = from(this.myArray);

    this.subscription = observable$
      .pipe(
        // 2. 오퍼레이터에 의한 옵저버블 변형
        map((item) => item * 2), // 2, 4, 6, 8, 10
        filter((item) => item > 5), // 6, 8, 10
        tap((item) => console.log('tap(item) : ' + item)) // 6, 8, 10
      )
      // 3. 옵저버블 구독
      .subscribe(
        (value) => this.values.push(value), // next
        (error) => console.log(error), // error
        () => console.log('Streaming finished') // complete
      );
  }

  ngOnDestroy() {
    // 4. 옵저버블 구독 해지
    this.subscription.unsubscribe();
  }
} // end AppComponent
