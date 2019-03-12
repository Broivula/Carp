import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IFileUploadResponse,
  iListOfFavourites,
  IMediaData,
  ITagMediaData,
  Loginresponse,
  User
} from "../../interfaces/interfaces";

import {Login, UserCreated} from '../../interface/media';
import {_catch} from "rxjs/operator/catch";


/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  private apiUrl: string = 'http://media.mw.metropolia.fi/wbma';
  profile_pic = null;
  user_info = {};
  booked_rides = [];
  user: User = null;
  public logged = false;
  token;
  public bookedRides = [];

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

  getFileById (id) {
    return this.http.get<IMediaData>('/wbma/media/' + id)
  }

  uploadRide(data) {
 //   console.log(data);
    let httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }};

//    console.log(httpOptions);
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

  updateRideInfo(desc, id) {
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };
    let data = {
      description:desc
    };

    return this.http.put('/wbma/media/' + id, data, httpsOptions);
  }

  deleteRide (id){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };
    return this.http.delete('/wbma/media/' + id, httpsOptions)
  }


  getUserInfo(id){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };
    return this.http.get<User>('/wbma/users/' + id, httpsOptions);
  }

  updateUserInfo(data){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };

    console.log(data);
    return this.http.put('/wbma/users', data, httpsOptions);
  }

  bookARide(id){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };
    let data = {
      file_id:id,
    };
    return this.http.post('/wbma/favourites', data, httpsOptions);
  }

  getBookedRidesByUser () {
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };

    return this.http.get<iListOfFavourites[]>('/wbma/favourites', httpsOptions)
  }

  getBookedRidesByFile(id){
    return this.http.get<iListOfFavourites[]>('/wbma/favourites/file/' + id)
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

  getInformationOfCurrentUser () {
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token')
      }
    };
    return this.http.get<User>(this.apiUrl + '/users/user', httpsOptions);
  }

    getProfilePic () {
    return new Promise( (resolve, reject) => {
    this.getFilesByTag('profile').subscribe( (fileList:ITagMediaData[]) => {
      this.getInformationOfCurrentUser().subscribe( (userInfo: User) => {
        fileList.map( entry => {if(entry.user_id === userInfo.user_id){
          this.cachedUserInfo.file_id = entry.file_id;
          this.getFileById(entry.file_id).subscribe(res => {
            resolve(res)
          })
        }})
      })
    })
  })
  }


  getUserRelevantData(){
    this.getProfilePic().then( res => {
      this.profile_pic = res;
    });

    new Promise((resolve, reject) => {
      this.getInformationOfCurrentUser().subscribe( (res:User) => {
        this.user_info = res;
        resolve();
      })
    }).then( () => {
      //now get the rides that the user has booked.
      this.getBookedRidesByUser().subscribe( (unfilteredFiles:iListOfFavourites[]) => {
        unfilteredFiles.map(entry => {
          this.getFileById(entry.file_id).subscribe((file_data:IMediaData) => {
            this.getFilesByTag('CARP').subscribe((res:ITagMediaData[]) =>{
              res.map(e => {
                if(e.file_id === entry.file_id){
                  this.booked_rides.push(e);
                }
              })
            })
          })
        });
      })
    })
  }

    checkToken(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        }),
      };
      return this.http.get<User>('/wbma/users/user', httpOptions);
    }

    checkIfUserExist(username){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      };
      // return this.http.post<Loginresponse>(this.apiUrl + '/login', user, httpOptions);

      return this.http.get('/wbma/users/username/' + username, httpOptions);
    }



    markLogged () {
      this.logged = !!localStorage.getItem('token');
    }

}
