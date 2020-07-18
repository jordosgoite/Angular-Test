import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
