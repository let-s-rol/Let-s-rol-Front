import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
    return this._http
      .post(this.Url + /*'register'*/'', baseCharacter)
      .subscribe((response) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.baseCharacterData = response;
        return found;
      });
  }



}
