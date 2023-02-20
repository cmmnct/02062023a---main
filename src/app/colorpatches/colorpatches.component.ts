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
    this.currentPatch.r = patch.r
    this.currentPatch.g = patch.g
    this.currentPatch.b = patch.b
    this.currentPatch.a = patch.a
    this.patchArray$.subscribe(
      patchArray => this.editPatchIndex = patchArray.indexOf(patch)
      )
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
