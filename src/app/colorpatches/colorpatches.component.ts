import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { Colorpatch } from '../models/colorpatch';

@Component({
  selector: 'app-colorpatches',
  templateUrl: './colorpatches.component.html',
  styleUrls: ['./colorpatches.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorpatchesComponent implements OnInit {

  currentPatch: Colorpatch = new Colorpatch(0, 0, 0, 1, "black") ;
  editPatch: Colorpatch = new Colorpatch(0, 0, 0, 1, "black");
  edit: Boolean = false;

  readonly greeting$ = new BehaviorSubject<string>('hello');
  readonly rgba$ = new Subject<string>();
  readonly patchArray: Colorpatch[] = [
    new Colorpatch(0, 0, 0, 1, "black"),
    new Colorpatch(255, 255, 255, 1, "white"),
    new Colorpatch(255, 0, 0, 1, "red"),
    new Colorpatch(0, 255, 0, 1, "green"),
    new Colorpatch(0, 0, 255, 1, "blue"),
    new Colorpatch(0, 255, 255, 1, "cyan"),
    new Colorpatch(255, 0, 255, 1, "magenta"),
    new Colorpatch(255, 255, 0, 1, "yellow")
  ]
  readonly patchArray$ = new BehaviorSubject(this.patchArray);

  constructor() {
  }
  ngOnInit(): void {   //life cycle hook
    this.greeting$.next('Good morning');
  }

  ngDoCheck() {
    console.log("do");
    this.rgba$.next(this.editPatch.getRgba());
  }
  updateColor(patch: Colorpatch) {
    this.currentPatch.r = patch.r
    this.currentPatch.g = patch.g
    this.currentPatch.b = patch.b
    this.currentPatch.a = patch.a
    this.editPatch = patch;
    this.greeting$.next('Good afternoon');
    this.rgba$.next(this.editPatch.getRgba());
    this.edit = true;
  }
  onSliderInput() {
    
    console.log("slide")
    this.patchArray$.next(this.patchArray);
    this.rgba$.next(this.editPatch.getRgba());

  }
  onSavePatch() {
    this.editPatch = this.currentPatch;
    this.currentPatch = new Colorpatch(0, 0, 0, 1, "black");
    this.edit = false;
  }
  onCancelUpdate() {
    this.editPatch.r = this.currentPatch.r;
    this.editPatch.g = this.currentPatch.g;
    this.editPatch.b = this.currentPatch.b;
    this.editPatch.a = this.currentPatch.a;
    
    this.edit = false;
  }


}
