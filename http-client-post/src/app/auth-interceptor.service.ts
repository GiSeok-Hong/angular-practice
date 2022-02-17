import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  // AuthService를 주입 받는다
  constructor(private auth: AuthService) {}

  // 1. intercept 메소드는 2개의 파라미터를 갖는다.
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // AuthService 서비스로부터 인증 토큰을 취득한다 (잠정처리)
    const authToken = this.auth.getToken();

    // 2. 헤더에 인증 토큰을 추가한 새로운 HttpRequest 객체를 생성(클론)한다.
    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', authToken),
    });

    // 3. 원본 HttpRequest 객체 대신 클론한 HttpRequest 객체를 다음 미들웨어 체인으로 전달한다.
    // 다음 인터셉터가 없는 경우, Observable을 반환하고 종료한다.
    return next.handle(clonedRequest);
  }
}
