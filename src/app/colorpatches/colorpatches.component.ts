import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Colorpatch } from '../models/colorpatch';
import { PatchesService } from './data/patches.service';

@Component({
  selector: 'app-colorpatches',
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchesComponent implements OnInit {

  currentPatch: Colorpatch = new Colorpatch(0, 0, 0, 1, "black") ;
  editPatchIndex: number;
  edit: Boolean = false;

  readonly greeting$ = new BehaviorSubject<string>('hello');
  readonly rgba$ = new Subject<string>();
  
 patchArray$:Observable<Colorpatch[]>;

  constructor(private patchesService : PatchesService) {
  }
  ngOnInit(): void {   //life cycle hook
    this.greeting$.next('Good morning');
    this.patchArray$ = this.patchesService.getColorPatches();
  }

  ngDoCheck() {
    this.rgba$.next(this.currentPatch.getRgba());
  }
  updateColor(patch: Colorpatch) {
    this.currentPatch = new Colorpatch(patch.r, patch.g, patch.b, patch.a, patch.name)
    this.editPatchIndex = this.patchesService.getPatchIndex(patch)

    ;
    
    //this.patchesService.updatePatch()
    this.greeting$.next('Good afternoon');
    this.rgba$.next(this.currentPatch.getRgba());
    this.edit = true;
  }
  onSliderInput() {
   
    this.rgba$.next(this.currentPatch.getRgba());

  }
  onSavePatch() {
   this.patchesService.updatePatch(this.editPatchIndex, this.currentPatch);
    this.currentPatch = new Colorpatch(0, 0, 0, 1, "black") 
    this.edit = false;
  }
  onCancelUpdate() {
    this.edit = false;
  }


}
