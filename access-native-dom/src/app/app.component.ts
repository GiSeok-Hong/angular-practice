import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 #h1>Heading1</h1>
    <h2 #h2>Heading2</h2>
    <h3 #h3>Heading3</h3>
  `,
  styles: [],
})
export class AppComponent implements AfterViewInit {
  /*
    @ViewChild 데코레이터의 인자로 탐색 대상 요소에 지정된 템플릿 참조 변수를 문자열의 형태로 전달한다.
    템플릿 참조 변수를 사용하여 네이티브 DOM을 탐색한 경우, 탐색 결과는 ElementRef 타입의 인스턴스가 바인딩된다.
  */
  @ViewChild('h1') myElem!: ElementRef;

  /*
    @ViewChildren 데코레이터의 인자로 탐색 대상 요소에 지정된 템플릿 참조 변수의 리스트를 문자열의 형태로 전달한다.
    템플릿 참조 변수를 사용하여 네이티브 DOM을 탐색한 경우, 탐색 결과는 ElementRef 타입 인스턴스의 리스트가 바인딩된다.
  */
  @ViewChildren('h2, h3') myElems!: QueryList<ElementRef>;

  // 생성자 함수에 주입된 ElementRef는 컴포넌트의 호스트 요소를 반환한다.
  constructor(elementRef: ElementRef) {
    console.log(elementRef);
  }

  /*
    ngAfterViewInit는 뷰 초기화가 종료됐을 때 실행되는 컴포넌트 생명주기 메소드이다.
    @ViewChild, @ViewChildren은 ngAfterViewInit 이전에 초기화된다. ngAfterViewInit에서 참조하는 것이 안전하다.
  */
  ngAfterViewInit() {
    console.log(this.myElem);
    this.myElems.forEach((child) => console.log(child));
  }
}
