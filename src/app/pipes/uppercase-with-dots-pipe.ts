import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseWithDots'
})
export class UppercaseWithDotsPipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase().split('').join('.');
  }

}
