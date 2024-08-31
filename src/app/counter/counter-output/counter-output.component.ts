import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent {
  counter: number;
  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.select(getCounter).subscribe((data)=>{
      console.log('counter called');
      this.counter = data;
    })
  }
}
