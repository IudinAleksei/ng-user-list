import { Pipe, PipeTransform } from '@angular/core';
import { IAddress } from '../models/user.model';

@Pipe({
  name: 'formatAddress'
})

export class FormatAddressPipe implements PipeTransform {
  transform(value: IAddress): string {
    return `${value.city}, ${value.street}, ${value.suite}`;
  }
}
