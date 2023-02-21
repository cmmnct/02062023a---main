import { inject, Injectable } from '@angular/core';
import { Colorpatch } from 'src/app/models/colorpatch';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatchesService {
private _http = inject(HttpClient)

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
  readonly patchArray$ = new BehaviorSubject(this.patchArray); //hot observable

  getColorPatches() {
   // this._http.get ('test.json')
    return this.patchArray$;
  }

  getPatchIndex(patch:Colorpatch):number{
    return this.patchArray.indexOf(patch)

  }
  updatePatch(index: number, patch: Colorpatch) {
    this.patchArray.splice(index, 1, patch);
    this.patchArray$.next(this.patchArray);
   
  }

}
