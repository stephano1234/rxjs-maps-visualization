import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'unitNumber',
  standalone: true,
})
export class UnitNumberPipe implements PipeTransform {

  transform(value: number | null, unit: 's' | 'ms') {
    return `${value || 0}${unit}`;
  }

}
