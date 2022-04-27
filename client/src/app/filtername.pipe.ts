import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtername'
})
export class FilternamePipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {
    return value.sort((a, b) => {
      let x = a.createdAt;
      let y = b.createdAt;
      if (x < y) {
        return 1
      } else {
        return -1
      }
      return 0
    })
  }

}
