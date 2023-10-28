import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'processedTime',
  standalone: true,
})
export class ProcessedTimePipe implements PipeTransform {

  transform(value: number) {
    return `${(value / 1000).toFixed(3)}s`;
  }

}
