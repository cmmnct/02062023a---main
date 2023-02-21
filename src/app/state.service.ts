import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface State {
  edit: boolean
}

@Injectable({
  providedIn: 'root'
})

export class StateService {

  state: State = {
    "edit": false
  }

  state$ = new BehaviorSubject<State>(this.state)

  constructor() { }

  getState():BehaviorSubject<State>{
    return this.state$;
  }

  setState(state: boolean) {
    this.state.edit = state;
    this.state$.next(this.state);
  }
}

