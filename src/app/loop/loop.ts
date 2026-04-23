import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  imports: [],
  templateUrl: './loop.html',
  styleUrl: './loop.css',
})
export class Loop {
  name: any = ['ejaz', 'swarup', 'nitish', 'saklen'];

  students: any = [
    {
      name: 'ejaz',
      age: 25,
      email: 'ejaz@test.com',
    },
    {
      name: 'swarup',
      age: 26,
      email: 'swarup@test.com',
    },
    {
      name: 'nitish',
      age: 29,
      email: 'nitish@test.com',
    },
    {
      name: 'saklen',
      age: 35,
      email: 'saklen@test.com',
    },
  ];

  getName(val: any) {
    console.log('name:', val);
  }

  newArr: any = ['ejaz', 'anil', 'swarup', 'saklen', 'nitish'];

  // newArr: any = [];
}
