import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
@Input() comic: any;
role:string;
  constructor() { }

  ngOnInit(): void {
  }

  filterByRol(arr, rol){
   return arr.filter((item)=>item.role==rol);
  }
}
