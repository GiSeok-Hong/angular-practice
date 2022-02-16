import { Component, OnInit } from '@angular/core';

// 1. RxJS 임포트
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <h3>Mouse Coordinates</h3>
    <h3>X : {{ posX }} y : {{ posY }}</h3>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  mousePosition$!: Observable<Event>;
  posX = 0;
  posY: number = 0;

  ngOnInit() {
    // 2. 옵저버블의 생성(DOM 이벤트를 옵저버블로 변환)
    this.mousePosition$ = fromEvent(document, 'mousemove');

    // 3. 옵저버는 옵저버블을 구독하고 옵저버블이 방출한 데이터를 전파받아 사용한다.
    this.mousePosition$.subscribe(
      (event) => {
        this.posX = (event as MouseEvent).clientX; // 유저가 확실하게 타입을 알때 사용하는게 좋음. 평소에는 사용 안 하는 게 좋음.
        this.posY = (event as MouseEvent).clientY; // 타입 단언문
      },
      (error) => console.log(error),
      () => console.log('complete!')
    );
  }
}
