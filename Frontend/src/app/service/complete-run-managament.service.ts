import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { FullCharacter } from '../inferfaces/fullCharacter';

@Injectable({
  providedIn: 'root'
})
export class CompleteRunManagamentService {
  CharactersServiceComponentFactory(CompleteRunManagamentService : CompleteRunManagamentService) {
    throw new Error('Method not implemented.');
  }

  readonly Url = 'http://127.0.0.1:8000/api/';

fullCharData : any;

  constructor(private _http: HttpClient) { }

  addFullCharacter () {
    console.log('Payload:', ); // Log the payload before making the request


    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };
    console.log(localStorage);
    

    return this._http.post(this.Url + 'createFullCharacter', { headers } )
      .toPromise()
      .then(response => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.fullCharData = response;
        return found;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
    

  }

  getCharacterTable (id_run:number) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    const options = {
      headers,
      withCredentials: true
    };
    console.log('ID:', id_run);
  
    return this._http
    .get<FullCharacter[]>(`${this.Url}showPlayerCharacter/${id_run}`, options)
    .pipe (
      tap((response) => console.log('Response from back-end:', response))
    );

  }


  getBaseCharacters() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    return this._http
      .get<FullCharacter[]>(this.Url + 'showBaseCharacter', { headers, withCredentials: true,})
      .pipe(tap((rankings) => console.log(rankings)));
  }



}
