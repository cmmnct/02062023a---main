import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Inject } from '@angular/core';
import { BehaviorSubject, of, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Colorpatch } from '../models/colorpatch';
import { State, StateService } from '../state.service';
import { PatchesService } from './data/patches.service';

@Component({
  selector: 'app-colorpatches',
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchesComponent implements OnInit {
  //stateService = Inject(StateService);
  currentPatch: Colorpatch = new Colorpatch(0, 0, 0, 1, "black") ;
  editPatchIndex: number;
  edit: Boolean = false;

  readonly greeting$ = new BehaviorSubject<string>('hello');
  readonly rgba$ = new Subject<string>();
  
 patchArray$:Observable<Colorpatch[]>;
 state$:BehaviorSubject<State>;

  constructor(private patchesService : PatchesService, private stateService: StateService) {
  }
  ngOnInit(): void {   //life cycle hook
    this.greeting$.next('Good morning');
    this.patchArray$ = this.patchesService.getColorPatches();
    this.state$ = this.stateService.getState();
  }

  ngDoCheck() {
    this.rgba$.next(this.currentPatch.getRgba());
  }
  updateColor(patch: Colorpatch) {
    this.currentPatch = new Colorpatch(patch.r, patch.g, patch.b, patch.a, patch.name)
    this.editPatchIndex = this.patchesService.getPatchIndex(patch);
    this.rgba$.next(this.currentPatch.getRgba());
    //this.edit = true;
    this.stateService.setState(true);
  }
  onSliderInput() {
   
    this.rgba$.next(this.currentPatch.getRgba());

  }
  onSavePatch() {
   this.patchesService.updatePatch(this.editPatchIndex, this.currentPatch);
    this.currentPatch = new Colorpatch(0, 0, 0, 1, "black") 
    this.stateService.setState(false);
  }
  onCancelUpdate() {
    this.stateService.setState(false);

  }


}
