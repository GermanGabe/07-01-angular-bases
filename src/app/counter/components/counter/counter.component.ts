import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr>
<h3> {{ counter}}</h3>
<hr>

<button (click)="increaseBy(2)">+1</button>
<button (click)="resetCounter(10)">Reset</button>
<button (click)="increaseBy(-2)">-1</button>

<hr>
  `
})

export class CounterComponent implements OnInit {
  constructor() { }

  public counter: number = 10;


  increaseBy(value:number){
    this.counter+=value;
  }

  resetCounter(value:number){
    this.counter=value;
  }

  ngOnInit() { }
}
