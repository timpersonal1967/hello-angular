import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Greeting } from "./greeting/greeting";
import { Contact } from "./contact/contact";
import { ProfileCard } from "./profile-card/profile-card";
import { LifecycleDemoComponent } from "./lifecycle-demo/lifecycle-demo";
import { LoginFormComponent } from "./login-form/login-form";
import  { ToggleSwitchComponent } from "./toggle-switch/toggle-switch";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, FormsModule, ToggleSwitchComponent, Greeting, Contact, ProfileCard, LifecycleDemoComponent, LoginFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

   setting = false;
   
[x: string]: any;
  protected readonly title = signal('hello-angular');
}
