import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class seriesFilterPipe implements PipeTransform {
  transform(allSeries: any[], filter: string): any {
    if(!allSeries || !filter) {
      return allSeries;
    }
    return allSeries.filter(serie => JSON.stringify(serie).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}