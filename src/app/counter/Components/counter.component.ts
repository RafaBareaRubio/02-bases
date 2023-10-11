import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="decreaseBy(1)">-1</button>
  `
})


export class CounterComponent {
  public title: string = 'Mi curso Angular';
  public counter: number = 100;

  increaseBy(number: number):void {
    this.counter += number;
  }
  decreaseBy(number: number):void {
    this.counter -= number;
  }
  reset():void {
    this.counter = 10;
  }
}
