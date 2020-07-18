import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreatorsComponent } from '../../creators.component'

@Injectable({
  providedIn: 'root'
})
export class CreatorsApiService {

  PUBLIC_KEY = '1607336a86d386d6990a2518297c8e73';
  HASH = '4BA62A449C1E73DDD105D99BB5279DC1';
  URL_API = 'https://gateway.marvel.com:443/v1/public/creators?apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1&limit=100';
  constructor(private http: HttpClient) { }
  getAllCreators () : Observable<any> {
    return this.http.get<any>(this.URL_API)
    .pipe(map((data:any) => data.data.results))
  }
  getCreator (creatorId:string): Observable<CreatorsComponent>{
    // console.log(comicId);
     const url_creatorDetail = 'https://gateway.marvel.com:443/v1/public/creators';
     const url_creatorId = creatorId;
     const url_key = 'ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
     const url =  `${url_creatorDetail}/${url_creatorId}?${url_key}`;
     return this.http.get<CreatorsComponent>(url)
     .pipe(map((data:any) => data.data.results)
     )
   }
  getCreatorComics (creatorId:string): Observable<CreatorsComponent>{
     const url_creatorDetailComics = 'https://gateway.marvel.com:443/v1/public/creators';
     const url_creatorId = creatorId;
     const url_key = 'comics?ts=1&apikey=1607336a86d386d6990a2518297c8e73&hash=4ba62a449c1e73ddd105d99bb5279dc1';
     const url =  `${url_creatorDetailComics}/${url_creatorId}/${url_key}`;
     return this.http.get<CreatorsComponent>(url)
     .pipe(map((data:any) => data.data.results)
     )
   }
}
