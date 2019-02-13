import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMediaData, Loginresponse, User } from "../../interfaces/interfaces";

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  private apiUrl:string  = 'http://media.mw.metropolia.fi/wbma';


  constructor(public http: HttpClient) {

  }

  getAllMedia (){
    return this.http.get<IMediaData[]>(this.apiUrl + '/media');
  }

  uploadRide(data: any) {
    const httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token')
      }
    };
    return this.http.post<Loginresponse>(this.apiUrl + '/media', data, httpOptions);
  }

  login(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    };
    return this.http.post<Loginresponse>(this.apiUrl + '/login', user, httpOptions);
  }
}
