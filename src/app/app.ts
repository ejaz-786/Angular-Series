// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })

// export class App {
//   protected readonly title = signal('angular-series');
// }

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SignUP } from './sign-up/sign-up';
import { Counter } from './counter/counter';
import { Event } from './event/event';
import { ControlFlow } from './control-flow/control-flow';
import { Switch } from './switch/switch';
import { Loop } from './loop/loop';
import { Signal } from './signal/signal';
import { TwoWayBinding } from './two-way-binding/two-way-binding';
import { Todolist } from './todolist/todolist';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css',
// })
// export class App {
//   title = 'My App';
// }

@Component({
  selector: 'app-root',
  imports: [
    Login,
    SignUP,
    Counter,
    Event,
    ControlFlow,
    Switch,
    Loop,
    Signal,
    TwoWayBinding,
    Todolist,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'Angular';
  job: string = 'Frontend developer';
  age: number = 25;

  handleClick() {
    // console.log('clicked button...');
    // this.otherFunction();

    const { title, job, age } = this;
    const obj = { title, job, age };

    // const obj: any = {this.title, this.job, this.age };
    // obj.title = this.title;
    // obj.job = this.job;
    // obj.age = this.age;

    console.log(obj);
  }

  otherFunction() {
    console.log('other function called...');
  }

  updateValue() {
    let x = 50;

    this.sumValue(10, x);
  }

  sumValue(a: number, b: number) {
    console.log(a + b);
  }
}
