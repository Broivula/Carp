import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';
import {iListOfFavourites, IMediaData, ITagMediaData, User} from "../../interfaces/interfaces";
import { RidePage } from "../ride/ride";
import {SettingsPage} from "../settings/settings";


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile_pic = null;
  user_info = {};
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  booked_rides = [];
  files_retrieved = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider) {

  }

  ionViewDidLoad() {/*
    this.mediaProvider.getProfilePic().then( res => {
      this.profile_pic = res;
    });

    new Promise((resolve, reject) => {
      this.mediaProvider.getInformationOfCurrentUser().subscribe( (res:User) => {
        this.user_info = res;
        resolve();
      })
    }).then( () => {
      //now get the rides that the user has booked.
      this.mediaProvider.getBookedRidesByUser().subscribe( (unfilteredFiles:iListOfFavourites[]) => {
        unfilteredFiles.map(entry => {
          this.mediaProvider.getFileById(entry.file_id).subscribe((file_data:IMediaData) => {
            this.mediaProvider.getFilesByTag('CARP').subscribe((res:ITagMediaData[]) =>{
              res.map(e => {
                if(e.file_id === entry.file_id){
                  this.booked_rides.push(e);
                }
            })
            })
          })
        });
      })
    })*/
  }



  pushToRidePage(params?){
    params.parentPage = this;
    this.navCtrl.push(RidePage, params);
  }

  pushToSettingsPage(){
    this.navCtrl.push(SettingsPage)
  }

  logout() {

    this.mediaProvider.booked_rides.length = 0;
    this.mediaProvider.user_info = {};
    this.mediaProvider.profile_pic = null;
    localStorage.clear();
    this.mediaProvider.logged = false;
    //   this.navCtrl.push(HomePage);
    this.navCtrl.parent.select(0);
  }

}
