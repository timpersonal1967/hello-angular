import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  name = "Angular Enthusiast";
  today = new Date();
}
