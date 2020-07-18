import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { CharactersApiService} from './character/shared/characters-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  constructor(private characterSvc: CharactersApiService) { }
  filterpost:Observable<any>;
  allCharacters:  Observable<any>;
  textoDeInput: string;
  ngOnInit() {
    this.getCharacters();
  }
  getCharacters() {
    this.characterSvc.getAllCharacters().subscribe(heroes=> this.allCharacters=heroes);
  }  
}
