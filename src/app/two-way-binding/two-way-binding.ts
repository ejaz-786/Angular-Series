import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  name: string = 'Hello Rais sir';
  email: string = 'test@gmail.com';

  // changeName(val: any) {
  //   this.name = val;
  // }
}
