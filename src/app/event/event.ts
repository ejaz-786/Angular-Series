import { Component } from '@angular/core';

@Component({
  selector: 'event',
  imports: [],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  inputValue: any = 0;

  handleEvent(event: any) {
    console.log('Event function called..');
    console.log((event.target as HTMLInputElement).value);

    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
