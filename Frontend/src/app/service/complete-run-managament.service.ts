import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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

  URLid!: number;
  monsterDamage!: number;
  // character!: FullCharacter;

  compraDatos: any;



  addFullCharacter(character: FullCharacter, URLid: number) {
    console.log('Payload:', character);


    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };


    const body = {
      id_run: URLid,
      name: character.name,
      race: character.race,
      description: character.description,
    };
 

    console.log('Payload:', body); // Log the payload before making the request

    return this._http
      .put(this.Url + 'createFullCharacter', body, { headers })
      .toPromise()
      .then((response) => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.fullCharData = response;
        return found;
      })
      .catch((error) => {
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


  buyCardPack(id_player_character: number, tipo:string) {


    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };
    
    console.log('Payload: ' + id_player_character, ', ', tipo);
    console.log('Token: ', headers);


    
    

    return this._http.put(this.Url + `buyAndInsertOnInventory/${tipo}/${id_player_character}`, {}, {
      headers,
      withCredentials: true
    })
    
    .toPromise()
    .then((response) => {
      console.log(response);

      let found = false;
      if (response != null) {
        found = true;
      }

      this.compraDatos = response;
      return found;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
    
  
  }


  saveMessage(idRun: number, message: string) {
    const url = `${this.Url}SaveHistorial/${idRun}/messages`;
    const body = { message };
  
    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };
  
    console.log('Payload:', body); // Log the payload before making the request
  
    return this._http.post(url, body, { headers })
      .toPromise()
      .then((response) => {
        console.log(response);
  
        let success = false;
        if (response != null) {
          success = true;
        }
  
        return success;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  }

  getMessages(idRun: number) {
    const url = `${this.Url}GetHistorial/${idRun}/messages`;
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    return this._http.get<any>(url, { headers, withCredentials: true })
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.messages;
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  }


  getInventory(idPlayerCharacter: number, idRun: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    const options = {
      headers,
      withCredentials: true,
    };
  
    return this._http.get<any>(`${this.Url}getInventory/${idPlayerCharacter}/${idRun}`, options);
  }

  markAsDeck(idCardInventory: number): Promise<any> {
    const token = localStorage.getItem('access_token');
    const headers = { Authorization: `Bearer ${token}` };

    return this._http
      .put(this.Url + `PutOnDeck/${idCardInventory}`, {}, { headers })
      .toPromise()
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }

  getDeck(idPlayerCharacter: number): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });
  
    const options = {
      headers,
      withCredentials: true,
    };
  
    return this._http.get<any>(`${this.Url}getDeck/${idPlayerCharacter}`, options)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }
  
  
    reduceCharacterLife(monsterDamage:number) {

      console.log(monsterDamage);
      this.monsterDamage = monsterDamage;


  }

  returnDamage() {

    return this.monsterDamage;
    

  }
  

  }




