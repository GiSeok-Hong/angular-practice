import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appTextColor]',
})
export class TextColorDirective implements OnInit {
  // 프로퍼티 바인딩을 통한 상태 전달
  @Input('appTextColor') color!: string;
  // 일반 어트리뷰트의 정적 값의 전달
  @Input() defaultColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // 기본 컬러를 초기 표시에 적용
  ngOnInit() {
    this.textColor(this.defaultColor);
  }

  @HostListener('mouseenter') handleMouseEnter() {
    this.textColor(this.color);
  }

  @HostListener('mouseleave') handleMouseLeave() {
    // this.textColor(null);
    this.textColor(this.defaultColor);
  }

  private textColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
