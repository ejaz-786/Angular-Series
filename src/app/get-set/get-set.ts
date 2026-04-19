import { Component } from '@angular/core';

@Component({
  selector: 'get-set',
  imports: [],
  templateUrl: './get-set.html',
  styleUrl: './get-set.css',
})
export class GetSet {
  InputName: string = '';
  displayName: string = '';
  email = '';

  getName(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.InputName = name;
  }

  showName() {
    this.displayName = this.InputName;
  }

  setDefaultName() {
    let default_name = 'John Doe';
    this.InputName = default_name;
  }

  getEmail(val: string) {
    this.email = val;
  }

  setDefaultEmail() {
    let default_email = 'johndoe420@khiladi.com';
    this.email = default_email;
  }
}
