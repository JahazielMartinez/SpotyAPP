import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery(query : string){
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQART57v6Ttu2_HXeJoApIRYCtL81bxH6ba3imdoSquvXobN0dwVPz70vjt_gaVpiPxiy0zQ6ox5GahrXDE'
     });

     return this.http.get(url, { headers }); 
   }

   getNewReleases(){
     
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (data: any) => data['albums'].items));
     }

   getArtistas( termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'BQART57v6Ttu2_HXeJoApIRYCtL81bxH6ba3imdoSquvXobN0dwVPz70vjt_gaVpiPxiy0zQ6ox5GahrXDE'
    });

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data: any) => data['artists'].items));
   }
  }
