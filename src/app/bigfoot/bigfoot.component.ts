import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject, Observable } from 'rxjs';
import { Colorpatch } from '../models/colorpatch';
import { PatchesService } from '../colorpatches/data/patches.service';
import { State, StateService } from '../state.service';

@Component({
  selector: 'app-bigfoot',
  templateUrl: './bigfoot.component.html',
  styleUrls: ['./bigfoot.component.css']
})
export class BigfootComponent {

  patchArray$: Observable<Colorpatch[]>;
  state$:BehaviorSubject<State>;

  constructor(private patchesService: PatchesService, private stateService: StateService) {
  }
  ngOnInit(): void {   //life cycle hook
    this.patchArray$ = this.patchesService.getColorPatches();
    this.state$ = this.stateService.getState()
  }

  


}