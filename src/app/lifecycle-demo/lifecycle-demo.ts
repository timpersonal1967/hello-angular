import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecycle-demo',
  standalone: true, // added
  imports: [CommonModule, FormsModule], // provide NgIf
  template: `<input [(ngModel)]="value" type="text" />
    <p *ngIf="visible">Value: {{ value }}</p>
    <button (click)="hide()">Hide</button>  
  `,
})
export class LifecycleDemoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() value = '';
  visible = true;
  ngOnInit() {
    console.log('Component initialized');
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      console.log('Value changed:', changes['value'].currentValue);
    }
  }
   ngDoCheck() {
    console.log('Change detection ran, current value:', this.value);
  }
  ngOnDestroy() {
    console.log('Component destroyed');
  }
  hide() {
    this.visible = false;
  }
}
