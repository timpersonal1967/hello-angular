import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="toggle">
      <input type="checkbox" [checked]="value" (change)="onToggle($event)" />
      <span class="slider"></span>
    </label>
  `,
  styles: [
    `
      .toggle {
        display: inline-block;
        position: relative;
      }
      input {
        display: none;
      }
      .slider {
        display: inline-block;
        width: 50px;
        height: 24px;
        background: #ccc;
        border-radius: 12px;
        cursor: pointer;
        transition: 0.3s;
      }
      input:checked + .slider {
        background: #4caf50;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true,
    },
  ],
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  value = false;
  onChange = (val: any) => {};
  onTouched = () => {};

  writeValue(val: any) {
    this.value = val;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.checked;
    this.onChange(this.value);
    this.onTouched();
  }
}
