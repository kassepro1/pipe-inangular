import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'prefixNomPipe'})
export class PrefixNomPipe implements PipeTransform {
  transform(value: string,before:string): string {
    let newStr = `${before} ${value}`;
    return newStr;
  }
}
