import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewRun } from '../inferfaces/newRun';


@Injectable({
  providedIn: 'root'
})
export class newRunService {
  CharactersServiceComponentFactory(newRunService: newRunService) {
    throw new Error('Method not implemented.');
  }

  readonly Url = 'http://127.0.0.1:8000/api/';



  constructor(private _http: HttpClient) { }

  newRunData: any;

  addNewRun (newRun: NewRun, gameId: number, ) {
    console.log('Payload:', newRun); // Log the payload before making the request


    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };
    console.log(localStorage);

  
    

    return this._http.post(this.Url + 'games/' + gameId + '/runs', newRun, { headers } )
      .toPromise()
      .then(response => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.newRunData = response;
        return found;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
      
  }



}

