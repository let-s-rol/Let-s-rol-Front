import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCharacter } from 'src/app/inferfaces/baseCharacter';
import { NewRun } from 'src/app/inferfaces/newRun';

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
      .post(this.Url + '', baseCharacter)
      .subscribe((response) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.baseCharacterData = response;
        return found;
      });
  }

  newRun(newRun: NewRun) {
    return this._http
      .post(this.Url + '', newRun)
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
