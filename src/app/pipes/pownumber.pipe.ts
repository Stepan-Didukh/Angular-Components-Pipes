import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class PownumberPipe implements PipeTransform {

  transform(value: number, course: number) {
    return Math.floor(value / course) + `$`;
  }

}
