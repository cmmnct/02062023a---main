import { Pipe, PipeTransform } from '@angular/core';
import { Colorpatch } from '../models/colorpatch';

@Pipe({
  name: 'colorToString'
})
export class ColorPatchPipe implements PipeTransform {
  transform(patch:Colorpatch): string {
    return `rgba(${patch.r},${patch.g},${patch.b},${patch.a})`}
  }