import { Directive, ElementRef } from '@angular/core';

// 디렉티브의 식별자를 @Directive 메타데이터 객체의 selector 프로퍼티에 지정한다.
@Directive({
  selector: '[appTextBlue]',
})
export class TextBlueDirective {
  // 생성자 함수에 주입된 ElementRef 는 컴포넌트의 호스트 요소를 반환한다.
  constructor(el: ElementRef) {
    // 호스트 요소의 컬러를 변경한다.
    el.nativeElement.style.color = 'blue';
  }
}
