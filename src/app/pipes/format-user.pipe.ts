import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './../models/user.model';

@Pipe({
  name: 'formatUser'
})
export class FormatUserPipe implements PipeTransform {

  transform(value: IUser, ...args: unknown[]): unknown {
    return value;
  }

}
