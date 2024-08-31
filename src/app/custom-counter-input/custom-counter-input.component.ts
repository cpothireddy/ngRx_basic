import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../counter/state/counter.state';
import { customIncrement } from '../counter/state/counter.actions';
import { changeChannelName } from './../counter/state/counter.actions';
import { getChannelName } from '../counter/state/counter.selector';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent {
  value: number;
  channelName: string;
  channelName$: Observable<string>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
