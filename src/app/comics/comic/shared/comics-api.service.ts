import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ComicsComponent } from '../../comics.component';

@Injectable({
  providedIn: 'root'
})
export class ComicsApiService {

  PUBLIC_KEY = '1607336a86d386d6990a2518297c8e73';
  HASH = '4BA62A449C1E73DDD105D99BB5279DC1';
  URL_API = 'https://gateway.marvel.com:443/v1/public/comics?apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1&limit=100';
  constructor(private http: HttpClient) { }
  getAllComics () : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any) => data.data.results))
  }
  getComic (comicId:string): Observable<ComicsComponent>{
    const url_comicDetail = 'https://gateway.marvel.com:443/v1/public/comics';
    const url_comicId = comicId;
    const url_key = 'ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
    const url =  `${url_comicDetail}/${url_comicId}?${url_key}`;
    console.log(url);
    return this.http.get<ComicsComponent>(url)
    .pipe(map((data:any) => data.data.results)
    )
    
  }
}