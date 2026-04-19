import { Component } from '@angular/core';

@Component({
  selector: 'control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  display: boolean = true;
  value: number = 10;
  toggle: boolean = true;
  // textToggle: string = 'hide';
  colorCode: string = '1';
  colorValue = '';

  toggleDiv() {
    this.display = !this.display;
    // if (this.textToggle === 'hide') {
    //   this.textToggle = 'show';
    // } else {
    //   this.textToggle = 'hide';
    // }
  }

  togleColour() {
    this.toggle = !this.toggle;
  }

  changeEvent(e: Event) {
    this.colorValue = (e.target as HTMLInputElement).value;
    this.handleColor(this.colorValue);
  }

  handleColor(c: string) {
    this.colorCode = c;
  }
}
