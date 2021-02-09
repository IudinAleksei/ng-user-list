import { IAddress, ICompany } from './../../models/user.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'printObj'
})
export class PrintObjPipe implements PipeTransform {

  transform(data: IAddress | ICompany): string[] {
    const input = Object.entries(data);
    const output = input.map(([key, value]) => {
      const temp = typeof value === 'object' ? this.transform(value) : value;
      return `${key}: ${temp}`;
    });
    return output;
  }

}
