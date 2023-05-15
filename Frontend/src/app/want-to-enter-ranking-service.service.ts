import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WantToEnterRankingServiceService {

  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) { }

  CodeData: any;

  sendCode(code: string) {
   

    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };

    console.log('Payload:', headers, code); // Log the payload before making the request
    const bodyCode = { code: code.trim() }; // Set the code in the request body
   

    return this._http.post(this.Url + 'access_ranking/', bodyCode,  { headers })
      .toPromise()
      .then(response => {
        console.log(response);

        let found = false;
        if (response != null) {
          found = true;
        }

        this.CodeData = response;
        return found;
      })
      .catch(error => {
        console.log(error);
        return false;
      });
  }
}