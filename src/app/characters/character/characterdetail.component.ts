import { Component, OnInit, Input } from '@angular/core';
import { CharactersApiService} from './shared/characters-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-characterdetail',
  templateUrl: 'characterdetail.component.html',
  styleUrls: ['characterdetail.component.css']
})

export class CharacterDetailComponent implements OnInit {
    @Input() character: any;
  constructor(private _route: ActivatedRoute, private comicsSvc: CharactersApiService) { }
  characterId: string;
  characterDetail: Observable<any>;
  characterDetailComics: Observable<any>;
  characterDetailSeries: Observable<any>;
 
  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    this.getCharacters(); 
    this.getCharactersComics();
    this.getCharactersSeries();
  }
  getCharacters() {
    this.characterId = this._route.snapshot.paramMap.get('id');
    this.characterDetail = this.comicsSvc.getCharacter(this.characterId);
    console.log(this.characterDetail);
  }
  getCharactersComics() {
    this.characterId = this._route.snapshot.paramMap.get('id');
    this.characterDetailComics = this.comicsSvc.getCharacterComics(this.characterId);
  }
  getCharactersSeries() {
    this.characterId = this._route.snapshot.paramMap.get('id');
    this.characterDetailSeries = this.comicsSvc.getCharacterSeries(this.characterId);
  }
}
