import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../counter/state/counter.state';
import { customIncrement } from '../counter/state/counter.actions';
import { changeChannelName } from './../counter/state/counter.actions';
import { getChannelName } from '../counter/state/counter.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent {
  value:number;
  channelName: string;
  channelName$: Observable<string>;
  constructor(private store: Store<{counter: counterState}>){}

  ngOnInit(): void {
    // this.store.select(getChannelName).subscribe((data) => {
    //   console.log('channelName called');
    //   this.channelName = data;
    // });
    // for this subscription, we have to unsubscripe, so lets use in the form of observable and we can read it through async pipe.

    this.channelName$ = this.store.select(getChannelName);
    // no need to unsubscripe this.
    
  }

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}));
  }

  onChangeChannelName(){
    this.store.dispatch(changeChannelName());
  }
}
