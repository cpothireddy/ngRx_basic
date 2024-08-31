import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './../state/counter.actions';
import { counterState } from '../state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css'],
})
export class CounterButtonsComponent {
  // now, we have an interface with the same structure, lets replace it
  // constructor(private store: Store<{ counter: {counter:number} }>) {}

  constructor(private store: Store<AppState>) {}

  onIncrement() {
    this.store.dispatch(increment())
  }

  onDecrement() {
    this.store.dispatch(decrement())
  }

  onReset() {
    this.store.dispatch(reset())
  }
}
