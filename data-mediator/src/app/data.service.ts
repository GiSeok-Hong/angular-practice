import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  message!: string; // 공유 데이터

  constructor() {}
}
