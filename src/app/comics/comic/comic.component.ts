import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
@Input() comic: any;

  constructor() { }

  ngOnInit(): void {
  }

  filterByRol(arr, rol){
    const result =arr.find((item)=>item.role==rol);
    if ( result !== undefined){
      const resultf = (Object.entries(result));
      console.log(resultf[1].slice(1, 2));
      return resultf[1].slice(1, 2);
    }
  }
}
