import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(price?: number): string {
    const defaultValue = "$0.00";

  if (!price) return defaultValue;
  if (isNaN(Number(price))) return defaultValue;

  return "$" + price.toFixed(2);
  }

}
