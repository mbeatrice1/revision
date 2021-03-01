import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitDash'
})
export class SplitDashPipe implements PipeTransform {

  transform(value: string): string {
    let newString = value.replace("-", " ");

     return newString;
  }

}
