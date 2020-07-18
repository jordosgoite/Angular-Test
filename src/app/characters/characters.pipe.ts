import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class characterFilterPipe implements PipeTransform {
  transform(allCharacters: any[], filter: string): any {
    console.log('works');
    if(!allCharacters || !filter) {
      return allCharacters;
    }
    return allCharacters.filter(character => JSON.stringify(character).toLowerCase().indexOf(filter.toLowerCase()) !== -1);
  }
}