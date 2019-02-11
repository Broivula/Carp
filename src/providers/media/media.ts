import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login, User, UserCreated} from '../../interface/media';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {
  mediaAPI = "https://media.mw.metropolia.fi/wbma";
  logged = false;
  user: User = null;
  token;

  constructor(public http: HttpClient) {
    console.log('Hello MediaProvider Provider');
  }
  login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.http.post<Login>(this.mediaAPI + '/login', user, httpOptions);
  }

  register(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
    return this.http.post<UserCreated>(this.mediaAPI + '/users', user, httpOptions);
  }

  checkToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token'),
      }),
    };
    return this.http.get<User>(this.mediaAPI + 'users/user', httpOptions);
  }

  checkIfUserExist(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.get(this.mediaAPI + '/users/username/' + user.username, httpOptions);
  }
}
