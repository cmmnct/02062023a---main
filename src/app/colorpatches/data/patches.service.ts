import { Injectable } from '@angular/core';
import { Colorpatch } from 'src/app/models/colorpatch';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatchesService {


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

  getColorPatches() {
    return this.patchArray$;
  }
  updatePatch(index: number, patch: Colorpatch) {
    this.patchArray.splice(index, 1, patch);
    this.patchArray$.next(this.patchArray);
   
  }

}
