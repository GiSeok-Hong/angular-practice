import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

// 디렉티브의 식별자를 @Directive 메타데이터 객체의 selector 프로퍼티에 지정한다.
@Directive({
  selector: '[appTextBlue]',
})
export class TextBlueDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // 호스트 요소에서 발생한 mouseenter 이벤트의 핸들러를 정의
  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor('blue');
  }

  // 호스트 요소에서 발생한 mouseleave 이벤트의 핸들러를 정의
  @HostListener('mouseleave') handleMouseLeave() {
    this.textColor(null!);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
