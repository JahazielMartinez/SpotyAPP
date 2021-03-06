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
      'Authorization': 'Bearer BQDBcSncH4gSIRwRSQH8xXXVBVpILBQD6gsnrU8xzpG1IqQaH7ZfviXPt9oLgFrGZOaDQoY6ajba4mczTYU'
     });

     return this.http.get(url, { headers }); 
   }

   getNewReleases(){
     
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( (data: any) => data['albums'].items));
     }

   getArtistas( termino: string ){
    const headers = new HttpHeaders({
      'Authorization': 'BQDBcSncH4gSIRwRSQH8xXXVBVpILBQD6gsnrU8xzpG1IqQaH7ZfviXPt9oLgFrGZOaDQoY6ajba4mczTYU'
    });

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data: any) => data['artists'].items));
   }
  }
