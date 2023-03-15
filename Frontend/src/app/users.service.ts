import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './inferfaces/User';
import { filter } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  UsersServiceComponentFactory(UsersService: UsersService) {
    throw new Error('Method not implemented.');
  }
  readonly Url = 'http://127.0.0.1:8000/api/';

  constructor(private _http: HttpClient) {}

  userData: any;

  getUser() {
    // get
    return this._http.get<User[]>(this.Url + 'user').pipe(
      filter((response: any) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.userData = response;
        return found;
      })
    );
  }

  addUser(user: User) {
    return this._http
      .post(this.Url + 'register', user)
      .subscribe((response) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.userData = response;
        return found;
      });
  }



  login(login: User) {
    
    return this._http.post(this.Url + 'login', login).pipe(
      filter((response) => {
        let found = false;
        if (response != null) {
          found = true;
        }
        this.userData = response;
        return found;
      })
    );
    
  } 

  // login(email: string, password: string): Observable<any> {

  //   const body = { "email": email, password: password };
    
  //   console.log(this._http.post<any>('api/login', body));

  //   return this._http.post<any>('api/login', body);
  // }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    // si existe un token, el usuario está autenticado
    return token !== null;
  }
}
