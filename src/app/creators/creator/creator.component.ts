import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {
@Input() creator: any;
  constructor() { }

  ngOnInit(): void {
  }

}
