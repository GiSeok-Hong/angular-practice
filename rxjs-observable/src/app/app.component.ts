import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // 옵저버블이 구독될 때 호출되는 구독 함수
    const subscriber = (observer: any) => {
      try {
        // next 노티피케이션 방출
        observer.next(1);
        observer.next(2);

        // throw new Error('Something wrong!');

        // complete 노티피케이션 방출
        observer.complete();
      } catch (e) {
        // error 노티피케이션 방출
        observer.error(e);
      } finally {
        // 구독 해지될 때 호출되는 콜백 함수
        return () => console.log('Unsubscribed! 구독 해지!');
      }
    };

    // 옵저버블 생성     Observable 변수명 뒤에 $를 붙여주면 스트림통신을 뜻한다.
    const observable$ = new Observable(subscriber);

    // 구독(Subscription)
    observable$.subscribe(
      // 옵저버블이 방출한 next 노티피케이션에 반응하는 next 메소드
      (value) => console.log('value : ' + value),
      // 옵저버블이 방출한 error 노티피케이션에 반응하는 error 메소드
      (error) => console.error('error : ' + error),
      // 옵저버블이 방출한 complete 노티피케이션에 반응하는 complete 메소드
      () => console.log('Complete')
    );
  }
}
