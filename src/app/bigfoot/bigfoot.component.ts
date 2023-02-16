import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { Colorpatch } from '../models/colorpatch';

@Component({
  selector: 'app-bigfoot',
  templateUrl: './bigfoot.component.html',
  styleUrls: ['./bigfoot.component.css']
})
export class BigfootComponent implements OnInit {



  constructor() { }
currentPatch: Colorpatch = new Colorpatch(0, 0, 0, 1, "black");
  tempValues:Colorpatch;
  edit:Boolean = false;

  greeting$ = new BehaviorSubject<string>('hello');
  rgba$ = new Subject<string>();

  patchArray: Colorpatch[] = [
    new Colorpatch(0, 0, 0, 1, "black"),
    new Colorpatch(255, 255, 255, 1, "white"),
    new Colorpatch(255, 0, 0, 1, "red"),
    new Colorpatch(0, 255, 0, 1, "green"),
    new Colorpatch(0, 0, 255, 1, "blue"),
    new Colorpatch(0, 255, 255, 1, "cyan"),
    new Colorpatch(255, 0, 255, 1, "magenta"),
    new Colorpatch(255, 255, 0, 1, "yellow")
  ]

 patchArray$ = new BehaviorSubject(this.patchArray);


  ngOnInit(): void {   //life cycle hook
    this.currentPatch.r = 255;
    this.greeting$.next('Good morning');
  }

  ngDoCheck(){
    console.log("do");
    this.rgba$.next(this.currentPatch.getRgba());
  }
  updateColor(patch: Colorpatch) {
    this.tempValues = structuredClone(patch);
    this.currentPatch = patch;
    this.greeting$.next('Good afternoon');
    this.rgba$.next(this.currentPatch.getRgba());
    this.edit = true;
  }
  onSliderInput(){
    console.log("slide")
    this.patchArray$.next(this.patchArray);
    this.rgba$.next(this.currentPatch.getRgba());
    
  }
  onSavePatch(){
    this.currentPatch = new Colorpatch(0, 0, 0, 1, "black");
    this.edit = false;
  }
  onCancelUpdate(){
 this.currentPatch.r = this.tempValues.r
 this.currentPatch.g = this.tempValues.g
 this.currentPatch.b = this.tempValues.b
 this.currentPatch.a = this.tempValues.a
 this.currentPatch = new Colorpatch(0, 0, 0, 1, "black");
 this.edit = false;
  }

}
