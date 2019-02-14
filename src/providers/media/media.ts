import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMediaData, Loginresponse, User } from "../../interfaces/interfaces";

import {Login, UserCreated} from '../../interface/media';


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  private apiUrl: string = 'http://media.mw.metropolia.fi/wbma';
  mediaAPI = "https://media.mw.metropolia.fi/wbma";
  user: User = null;
  logged = false;
  token;

  constructor(public http: HttpClient) {

  }

  getAllMedia() {
    return this.http.get<IMediaData[]>(this.apiUrl + '/media');
  }

  uploadRide(data) {
    console.log(data);
    const httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    };
    console.log(httpOptions);
    return this.http.post<Loginresponse>(this.apiUrl + '/media', data, httpOptions);
  }

    login(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        }),
      };
      return this.http.post<Login>(this.mediaAPI + '/login', user, httpOptions);
    }

    register(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        }),
      };
      return this.http.post<UserCreated>(this.mediaAPI + '/users', user, httpOptions);
    }

    checkToken()
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        }),
      };
      return this.http.get<User>(this.mediaAPI + 'users/user', httpOptions);
    }

    checkIfUserExist(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      };
      // return this.http.post<Loginresponse>(this.apiUrl + '/login', user, httpOptions);

      return this.http.get(this.mediaAPI + '/users/username/' + user.username, httpOptions);
    }

}
