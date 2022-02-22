import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddAnimal } from '../animal/animal.actions';
import { Observable } from 'rxjs';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent {
  @Select((state) => state.animals) animals$!: Observable<any>;

  // Angular 종속성 주입을 통해 저장소에 대한 참조를 얻을 수 있다.
  constructor(private store: Store) {}

  addAnimal(name: string) {
    this.store
      .dispatch(new AddAnimal(name)) // store.dispatch() 메서드를 통해 스토어에 액션을 전달하려면 상태 수정자 함수를 트리거한다.
      .pipe(withLatestFrom(this.animals$))
      .subscribe(([_, animals]) => this.form.reset());
  }
}
