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
    return this.http.get<ITagMediaData[]>('http://media.mw.metropolia.fi/wbma/tags/carp', httpOptions);
  }

  getFileById (id) {
    return this.http.get<IMediaData>('http://media.mw.metropolia.fi/wbma/media/' + id)
  }

  uploadRide(data) {
 //   console.log(data);
    let httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }};

//    console.log(httpOptions);
    this.http.post( 'http://media.mw.metropolia.fi/wbma/media',data, httpOptions).subscribe( (res:IFileUploadResponse) => {
      let file_id = res.file_id;
      let tag_data = {
        'file_id':file_id,
        'tag':'CARP'
      };
      this.http.post('http://media.mw.metropolia.fi/wbma/tags', tag_data, httpOptions).subscribe( res => {
      })
    });
  }

  uploadNewProfilePic(data){
    let httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }};

    this.http.post( 'http://media.mw.metropolia.fi/wbma/media',data, httpOptions).subscribe( (res:IFileUploadResponse) => {
      let file_id = res.file_id;
      let tag_data = {
        'file_id':file_id,
        'tag':'profile'
      };
      this.http.post('http://media.mw.metropolia.fi/wbma/tags', tag_data, httpOptions).subscribe( res => {
        console.log('profile pic uploaded succesfully!');
        this.getProfilePic().then( res => {
          this.profile_pic = res;
        });
      })
    });
  }

  getCommentsById(id){
    return this.http.get('http://media.mw.metropolia.fi/wbma/comments/file/' + id);
  }

  postAComment(data){
    let httpOptions = {
      headers: {
        'x-access-token': localStorage.getItem('token'),
      }};

    return this.http.post('http://media.mw.metropolia.fi/wbma/comments', data, httpOptions);
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

    return this.http.put('http://media.mw.metropolia.fi/wbma/media/' + id, data, httpsOptions);
  }

  deleteRide (id){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };
    return this.http.delete('http://media.mw.metropolia.fi/wbma/media/' + id, httpsOptions)
  }


  getUserInfo(id){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };
    return this.http.get<User>('http://media.mw.metropolia.fi/wbma/users/' + id, httpsOptions);
  }

  updateUserInfo(data){
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };

    console.log(data);
    return this.http.put('http://media.mw.metropolia.fi/wbma/users', data, httpsOptions);
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
    return this.http.post('http://media.mw.metropolia.fi/wbma/favourites', data, httpsOptions);
  }

  getBookedRidesByUser () {
    let httpsOptions = {
      headers: {
        "x-access-token": localStorage.getItem('token'),
      }
    };

    return this.http.get<iListOfFavourites[]>('http://media.mw.metropolia.fi/wbma/favourites', httpsOptions)
  }

  getBookedRidesByFile(id){
    return this.http.get<iListOfFavourites[]>('http://media.mw.metropolia.fi/wbma/favourites/file/' + id)
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

  getViewProfilePic(id){
    return new Promise((resolve, reject) => {
      this.getFilesByTag('profile').subscribe((res:ITagMediaData[]) => {
        res.map(entry => {
          if(entry.user_id === id){
            this.getFileById(entry.file_id).subscribe((res:IMediaData) => {
              resolve(res);
            })
          }
        })
      })
    }).catch(e=>{
      console.log('something went wrong with fetching the users profile picture data : ' + e)
    })

  }

    checkToken(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'x-access-token': localStorage.getItem('token'),
        }),
      };
      return this.http.get<User>('http://media.mw.metropolia.fi/wbma/users/user', httpOptions);
    }

    checkIfUserExist(username){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      };
      // return this.http.post<Loginresponse>(this.apiUrl + '/login', user, httpOptions);

      return this.http.get('http://media.mw.metropolia.fi/wbma/users/username/' + username, httpOptions);
    }



    markLogged () {
      this.logged = !!localStorage.getItem('token');
    }

}
