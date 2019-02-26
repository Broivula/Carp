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
  public logged = false;
  token;

  cachedUserInfo = {
    file_id: null,
  };

  constructor(public http: HttpClient) {
  }

  getAllMedia() {
    let httpOptions = {
      headers: {
        'Content-type': 'application/json',
      }
    };
    return this.http.get<IMediaData[]>('/wbma/media', httpOptions);
  }

  getFileById () {
    return this.http.get<IMediaData>('/wbma/media/' + this.cachedUserInfo.file_id)
  }

  uploadRide(data) {
    console.log(data);
    let httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
        'Content-type': 'application/json',
      }
    };
    console.log(httpOptions);
    return this.http.post<Loginresponse>('/wbma/media', data, httpOptions);
  }

    login(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        }),
      };
      return this.http.post<Login>('/wbma/login', user, httpOptions);
    }

    register(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        }),
      };
      return this.http.post<UserCreated>('/wbma/users', user, httpOptions);
    }

    getFilesByTag(tag) {
    return this.http.get( '/wbma/tags/' + tag)
  }

  getInformationOfCurrentUser (token) {
    let httpsOptions = {
      headers: {
        "x-access-token": token
      }
    };
    return this.http.get('/wbma/users/user', httpsOptions);
  }

    getProfilePic () {
      this.getFilesByTag('profile').subscribe( (fileTagList: IMediaData[] )=> {
        this.getInformationOfCurrentUser(this.token).subscribe( (userInfo: User)=> {
          this.cachedUserInfo.file_id = fileTagList.filter(entry => entry.user_id == userInfo.user_id)[0].file_id;//.map(fileTagList => fileTagList.file_id);
          console.log(this.cachedUserInfo);
        })
      })
    }

    checkToken()
    {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        }),
      };
      return this.http.get<User>('/wbma/users/user', httpOptions);
    }

    checkIfUserExist(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      };
      // return this.http.post<Loginresponse>(this.apiUrl + '/login', user, httpOptions);

      return this.http.get('/wbma/users/username/' + user.username, httpOptions);
    }

}
