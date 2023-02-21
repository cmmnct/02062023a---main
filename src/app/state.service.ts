import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface State {
  edit: boolean
}

@Injectable({
  providedIn: 'root'
})

 

export class StateService {

  state: State = {
    "edit": true
  }

  state$ = new BehaviorSubject(this.state)

  constructor() { }

  getState():Observable<State>{
    return this.state$;
  }

  setState(state: boolean) {
    this.state.edit = state;
    this.state$.next(this.state);
  }
}

