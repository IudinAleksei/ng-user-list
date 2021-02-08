import { IAddress, ICompany } from './../../models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printObj'
})
export class PrintObjPipe implements PipeTransform {

  transform(value: IAddress | ICompany): string[] {
    const input = Object.entries(value);
    const output = input.map((item) => {
      const temp = typeof item[1] === 'object' ? this.transform(item[1]) : item[1];
      return `${item[0]}: ${temp}`;
    });
    return output;
  }

}
