import { Component, OnInit, Input } from '@angular/core';
import { SeriesApiService} from './shared/series-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-seriedetail',
  templateUrl: 'seriedetail.component.html',
  styleUrls: ['seriedetail.component.css']
})

export class SerieDetailComponent implements OnInit {
    @Input() serie: any;
  constructor(private _route: ActivatedRoute, private creatorsSvc: SeriesApiService) { }
  characterId: string;
  serieDetail: Observable<any>;
 
  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    this.getSeries();
  }
  getSeries() {
    this.characterId = this._route.snapshot.paramMap.get('id');
    this.serieDetail = this.creatorsSvc.getSerie(this.characterId);
  }
}