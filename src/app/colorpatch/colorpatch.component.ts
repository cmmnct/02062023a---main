import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChange, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';
import { faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-colorpatch',
  templateUrl: './colorpatch.component.html',
  styleUrls: ['./colorpatch.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ColorpatchComponent implements OnInit {

  @Input() patch:Colorpatch;
  @Input() edit:Boolean = true;
  newRgba$ = new BehaviorSubject<string>('');
  rgba:string;
  
  @Output() update = new EventEmitter<Colorpatch>();
  faEdit:IconDefinition = faEdit;
  constructor() { }

  ngOnInit(): void {
     this.newRgba$.next(this.patch.getRgba())
  }
  
  editPatch(){
    this.update.emit(this.patch);
  }

 

}

