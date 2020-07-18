import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class comicsFilterPipe implements PipeTransform {
  transform(allComics: any[], filter: string): any {
    if(!allComics || !filter) {
      return allComics;
    }
    return allComics.filter(comic => JSON.stringify(comic).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}