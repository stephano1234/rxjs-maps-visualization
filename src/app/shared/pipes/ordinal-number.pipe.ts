import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'ordinalNumber',
  standalone: true,
})
export class OrdinalNumberPipe implements PipeTransform {

  transform(value: number | null) {
    if (!value || value < 1) {
      return 'No';
    }
    const decimalUnit = value % 10;
    let ordinalSulfix = 'th';
    if (decimalUnit === 1) {
      ordinalSulfix = 'st';
    }
    if (decimalUnit === 2) {
      ordinalSulfix = 'nd';
    }
    if (decimalUnit === 3) {
      ordinalSulfix = 'rd';
    }
    return `${value}${ordinalSulfix}`;
  }

}
