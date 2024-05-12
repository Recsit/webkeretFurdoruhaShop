import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(val: string) {
    return new Intl.NumberFormat('hu', {
      style: 'currency',
      currency: 'HUF',
      minimumFractionDigits: 0,
    }).format(Number(val));
  }
}
