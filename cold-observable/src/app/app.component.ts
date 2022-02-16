import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: ` <h1>콘솔창을 확인하세요</h1> `,
  styles: [],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    /*
      구독 함수(subscription function)를 제공하여 Cold observable을 생성한다.
      Cold observable의 구독 함수는 옵저버가 옵저버블을 구독(subscribe)할 때
      호출되며 구독되기 전까지는 호출되지 않는다.
    */
    const numbers$ = Observable.create(
      (observer: { next: (arg0: number) => void; complete: () => void }) => {
        console.log('[New subscription created]');

        let i = 1;
        const interval = setInterval(
          /*
            1s마다 숫자를 방출하거나 데이터 스트림의 종료를 알린다.
            Observer 객체의 next 메소드는 옵저버블을 구독한 옵저버에게 데이터를 방출한다.
            Observer 객체의 complete 메소드는 옵저버블을 구독한 옵저버에게 옵저버블 스트림의 종료를 알린다.
          */
          () => (i <= 5 ? observer.next(i++) : observer.complete()),
          1000
        );

        // 구독 취소 시에 호출되는 클린업 함수를 반환한다.(option)
        return () => clearInterval(interval);
      }
    );

    /*
      옵저버가 옵저버블을 구독(subscribe)하면 옵저버블의 구독 함수가 호출된다.
      즉, 옵저버블이 처음부터 동작하기 시작한다.
    */
    numbers$.subscribe(
      (value: any) => console.log(`1st subscription next: ${value}`), //next
      (error: any) => console.log(`1st subscription error: ${error}`), // error
      () => console.log('1st subscription complete') // complete
    );

    /*
      이미 complete된 옵저버블을 다시 구독하여도 옵저버블의 구독 함수가 호출된다.
      즉, 옵저버블이 처음부터 동작하기 시작한다.
    */
    setTimeout(
      () =>
        numbers$.subscribe(
          (value: any) => console.log(`2nd subscription next: ${value}`), //next
          (error: any) => console.log(`2nd subscription error: ${error}`), // error
          () => console.log('2nd subscription complete') // complete
        ),
      6000
    );
  }
}
