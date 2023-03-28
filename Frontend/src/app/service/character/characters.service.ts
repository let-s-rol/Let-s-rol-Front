import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCharacter } from 'src/app/inferfaces/baseCharacter';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  CharactersServiceComponentFactory(CharactersService: CharactersService) {
    throw new Error('Method not implemented.');
  }

  readonly Url = 'http://127.0.0.1:8000/api/';



  constructor(private _http: HttpClient) { }

  baseCharacterData: any;

  addBaseCharacter(baseCharacter: BaseCharacter) {
    console.log('Payload:', baseCharacter); // Log the payload before making the request


    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };
    console.log(localStorage);

    console.log(this.Url + 'base-character');
    

    return this._http.post(this.Url + 'base-character', baseCharacter, { headers } )
      .toPromise()
      .then(response => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.baseCharacterData = response;
        return found;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
      
  }



}
