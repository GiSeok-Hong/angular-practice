import { InjectionToken } from '@angular/core';

// 주입 대상의 토큰
export interface AppConfig {
  url: string;
  port: string;
}

// 주입 대상의 값
export const MY_APP_CONFIG: AppConfig = {
  url: 'http://somewhere.io',
  port: '5000',
};

// AppConfig 타입의 InjectionToken APP_CONFIG 생성
export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

// 프로바이더
export const AppConfigProvider = {
  provide: APP_CONFIG, // InjectionToken
  useValue: MY_APP_CONFIG,
};
