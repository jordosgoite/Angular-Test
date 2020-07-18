import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class creatorsFilterPipe implements PipeTransform {
  transform(allCreators: any[], filter: string): any {
    if(!allCreators || !filter) {
      return allCreators;
    }
    return allCreators.filter(creator => JSON.stringify(creator).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}