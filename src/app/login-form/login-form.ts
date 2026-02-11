import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({ 
     selector: 'app-login-form',
     standalone: true,
     imports: [CommonModule, ReactiveFormsModule],
     templateUrl: './login-form.html' 
  })

export class LoginFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.loginForm.valid) {
      alert('Login successful!');
    }
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.loginForm.get(controlName);
    return control ? control['errors']?.[errorName] : false;
  }
}