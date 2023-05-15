import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Run } from './inferfaces/run';

@Injectable({
  providedIn: 'root'
})
export class WantToEnterRankingServiceService {

  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) { }

  CodeData: any;

  sendCode(run_password: string) {
   

    const token = localStorage.getItem('access_token');
    console.log('Token:', token); // Log token value
    const headers = { Authorization: `Bearer ${token}` };

    console.log('Payload:', headers, run_password); // Log the payload before making the request
    const bodyCode = { run_password: run_password }; // Set the code in the request body
   

    return this._http.post(this.Url + 'runs/enterRun', bodyCode,  { headers })
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


  getRuns() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    });

    return this._http
      .get<Run[]>(this.Url + 'runs', { headers, withCredentials: true,})
      .pipe(tap((rankings) => console.log(rankings)));
  }

}