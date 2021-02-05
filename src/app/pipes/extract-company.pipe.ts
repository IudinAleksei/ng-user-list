import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './../models/user.model';

@Pipe({
  name: 'extractCompany'
})
export class ExtractCompanyPipe implements PipeTransform {

  transform(value: IUser, ...args: unknown[]): unknown {
    return null;
  }

}
