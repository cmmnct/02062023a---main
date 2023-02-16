import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colortostring'
})
export class ColortostringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
