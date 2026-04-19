import { Component } from '@angular/core';
import { GetSet } from '../get-set/get-set';

@Component({
  selector: 'login',
  imports: [GetSet],
  templateUrl: './login.html',
  // template: `<h1>Login template</h1>`,
  styleUrl: './login.css',
  // styles: ['h1 {color: red;}'],
})
export class Login {}
