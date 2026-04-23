import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  count = signal(10);
  val = 2;

  // data = signal<number | string>(10);
  data: WritableSignal<number | string> = signal(10);
  // computedValue : Signal<number> = computed(() => 200);

  // constructor() {
  //   effect(() => {
  //     // console.log('normal val:', this.val);
  //     console.log('signal val:', this.count());
  //   });
  // }

  increaseValue() {
    // this.val = 30;
    this.count.set(this.count() + 1);
  }

  updateValue() {
    this.data.set('Ejaz');
    // this.data.update((val)=> val + 1);
  }

  // computed signal:

  // x = 10;
  // y = 20;
  // z = this.x + this.y;

  x = signal(10);
  y = signal(20);

  z = computed(() => this.x() + this.y());

  showValue() {
    // console.log(this.z);
    // this.x = 100;
    // console.log('after change:', this.z);

    console.log(this.z());
    this.x.set(100);
    console.log('after change:-', this.z());
  }

  //

  countval = signal(0);
  display = false;

  constructor() {
    effect(() => {
      if (this.countval() === 2) {
        this.display = true;

        setTimeout(() => {
          this.display = false;
        }, 100);
      } else {
        this.display = false;
      }
    });
  }

  toggleValue() {
    // this.display = !this.display;
    this.countval.set(this.countval() + 1);
  }
}
