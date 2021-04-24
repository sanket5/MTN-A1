import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const result = value.split(/\W/)[0];
    return  result[0].toUpperCase() + result.slice(1, result.length);
  }

}
