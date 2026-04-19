import { Component } from '@angular/core';

@Component({
  selector: 'switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  color: string = 'green';

  handleColor(val: string) {
    this.color = val;
  }
}
