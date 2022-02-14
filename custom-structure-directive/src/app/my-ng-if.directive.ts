import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyNgIf]',
})
export class MyNgIfDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  // @Input() set myNgIf
  @Input() set appMyNgIf(condition: boolean) {
    if (condition) {
      // 1. 호스트 뷰에 ng-template 디렉티브를 추가
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      // 2. 호스트 뷰에서 ng-template 디렉티브를 제거
      this.viewContainer.clear();
    }
  }
}
