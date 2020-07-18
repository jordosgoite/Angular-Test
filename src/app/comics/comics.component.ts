import { Component, OnInit } from '@angular/core';
import { ComicsApiService} from './comic/shared/comics-api.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private comicsSvc: ComicsApiService) { }
  allComics: Observable<any>;
  Comic: Observable<any>;
  textoDeInput: string;

  ngOnInit() {
  this.getComics();
  }
  getComics() {
    this.comicsSvc.getAllComics().subscribe(comicslist=> this.allComics=comicslist);
  }  
}
