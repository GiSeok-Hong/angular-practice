import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  template: `
    <h2>User Form</h2>
    <form #userForm="ngForm" (ngSubmit)="onNgSubmit(userForm)" novalidate>
      <input type="text" name="userid" placeholder="userid" ngModel />
      <input type="password" name="password" placeholder="password" ngModel />
      <button>submit</button>
    </form>
  `,
  styles: [],
})
export class UserFormComponent {
  onNgSubmit(userForm: NgForm) {
    console.log(userForm);
  }

  constructor() {}
}
