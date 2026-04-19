import { ParsedProperty } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  countervalue: number = 0;

  // increament() {
  //   this.countervalue = this.countervalue + 1;
  // }

  // reset() {
  //   this.countervalue = 0;
  // }

  // decreament() {
  //   if (this.countervalue <= 0) {
  //     alert('minimum limit');
  //     return;
  //   }
  //   this.countervalue = this.countervalue - 1;
  // }

  handleCounter(val: string) {
    if (val === 'plus') {
      this.countervalue = this.countervalue + 1;
    } else if (val === 'minus') {
      if (this.countervalue <= 0) return;
      this.countervalue = this.countervalue - 1;
    } else {
      this.countervalue = 0;
    }
  }
}
