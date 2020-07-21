import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterDetailComponent } from '../../../characters/character/characterdetail.component'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SeriesApiService {

  PUBLIC_KEY = '1607336a86d386d6990a2518297c8e73';
  HASH = '4BA62A449C1E73DDD105D99BB5279DC1';
  URL_API = 'https://gateway.marvel.com:443/v1/public/series?apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1&limit=100';
  constructor(private http: HttpClient) { }
  getAllSeries () : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any) => data.data.results))
  }
  getSerie (characterId:string): Observable<CharacterDetailComponent>{
    // console.log(comicId);
     const url_characterDetail = 'https://gateway.marvel.com:443/v1/public/series';
     const url_characterId = characterId;
     const url_key = 'ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
     const url =  `${url_characterDetail}/${url_characterId}?${url_key}`;
     console.log(url);
     return this.http.get<CharacterDetailComponent>(url)
     .pipe(map((data:any) => data.data.results)
     
    )
  }
}
