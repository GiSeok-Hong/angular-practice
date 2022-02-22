import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';

export class AddAnimal {
  static readonly type = '[ZOO] Add Animal';
  constructor(public name: string) {}
}
