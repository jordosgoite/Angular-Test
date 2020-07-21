import { Component, OnInit, Input } from '@angular/core';
import { ComicsApiService} from './shared/comics-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-comicdetail',
  templateUrl: 'comicdetail.component.html',
  styleUrls: ['comicdetail.component.css']
})

export class ComicDetailComponent implements OnInit {
    @Input() comic: any;
  constructor(private _route: ActivatedRoute, private comicsSvc: ComicsApiService) { }
  comicId: string;
  comicDetail: Observable<any>;
  charactersComicDetail: Observable<any>;
  creatorsComicDetail: Observable<any>;

 
  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    this.getComics();
    this.getComicCharacters();
    this.getComicCreators();
}

  getComics() {
    //  console.log('works');
    this.comicId = this._route.snapshot.paramMap.get('id');
    this.comicDetail = this.comicsSvc.getComic(this.comicId);
    console.log(this.comicDetail);
    }
  getComicCharacters() {
    this.comicId = this._route.snapshot.paramMap.get('id');
    this.charactersComicDetail = this.comicsSvc.getCharactersComic(this.comicId);
  }
  getComicCreators() {
    this.comicId = this._route.snapshot.paramMap.get('id');
    this.creatorsComicDetail = this.comicsSvc.getComicCreator(this.comicId);
  }
}
