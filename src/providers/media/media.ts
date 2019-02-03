import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IMediaData} from "../../interfaces/interfaces";

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

}
