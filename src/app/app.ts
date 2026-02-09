import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from "./greeting/greeting";
import { Contact } from "./contact/contact";
import { ProfileCard } from "./profile-card/profile-card";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Greeting, Contact, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-angular');
}
