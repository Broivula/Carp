import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IFileUploadResponse, IMediaData, ITagMediaData, Loginresponse, User} from "../../interfaces/interfaces";

import {Login, UserCreated} from '../../interface/media';


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  private apiUrl: string = 'http://media.mw.metropolia.fi/wbma';
  user: User = null;
  public logged = false;
  token;

  cachedUserInfo = {
    file_id: null,
  };

  constructor(public http: HttpClient) {
  }

  getAllCarpMedia() {
    let httpOptions = {
      headers: {
        'Content-type': 'application/json',
      }
    };
    return this.http.get<ITagMediaData[]>('/wbma/tags/carp', httpOptions);
  }

  getFileById () {
    return this.http.get<IMediaData>(this.apiUrl + '/media/' + this.cachedUserInfo.file_id)
  }

  uploadRide(data) {
    console.log(data);
    let httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }

    };
    console.log(httpOptions);
    this.http.post( '/wbma/media',data, httpOptions).subscribe( (res:IFileUploadResponse) => {
      console.log(res);
      let file_id = res.file_id;
      //now tag the motherfucker so that we can get in CARP frontpage yo
      let tag_data = {
        'file_id':file_id,
        'tag':'CARP'
      };
      this.http.post('/wbma/tags', tag_data, httpOptions).subscribe( res => {
        console.log(res);
      })
    });
  }

    login(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        }),
      };
      return this.http.post<Login>(this.apiUrl +'/login', user, httpOptions);
    }

    register(user:User){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        }),
      };
      return this.http.post<UserCreated>(this.apiUrl + '/users', user, httpOptions);
    }

    getFilesByTag(tag) {
    return this.http.get( this.apiUrl + '/tags/' + tag)
  }

  getInformationOfCurrentUser (token) {
    let httpsOptions = {
      headers: {
        "x-access-token": token
      }
    };
    return this.http.get(this.apiUrl + '/users/user', httpsOptions);
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
