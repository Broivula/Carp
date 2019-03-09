import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from "../../providers/media/media";
import {iListOfFavourites, IMediaData, User} from "../../interfaces/interfaces";

/**
 * Generated class for the RidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html',
})
export class RidePage {
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  rideUploaderInfo = <User>{};
  rideInfo = <IMediaData>{};
  userBookedRides = <iListOfFavourites[]>[];
  isThisBooked = false;
  amountBooked = 0;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: MediaProvider
  ) {
  }

  ionViewDidLoad() {
    let file_id = this.navParams.get('file_id');
    let uploader_id = this.navParams.get('uploader_id');

     new Promise((resolve, reject) => {
      this.data.getFileById(file_id).subscribe( (res:IMediaData) => {
        this.rideInfo = res;
        this.parseDesc(this.rideInfo.description);
        console.log(this.rideInfo);
        resolve();
      });
    }).then( () => {
      this.data.getUserInfo(uploader_id).subscribe( (res:User) => {
        console.log(res);
        this.rideUploaderInfo = res;
      });
    }).then(()=>{
      this.data.getBookedRidesByUser().subscribe( (res:iListOfFavourites[]) => {
        this.userBookedRides = res;
        this.userBookedRides.map(entry =>{ if(entry.file_id === this.rideInfo.file_id){
          this.isThisBooked = true;
        }});
        console.log(res);
      })
    }).then(() => {
      this.data.getBookedRidesByFile(this.rideInfo.file_id).subscribe( res => {
        this.amountBooked = res.length;
      })
     });

  }

  bookARide () {
    //
    let parsed = this.rideInfo.seats.toString().split('/');
    let x = parsed[0];
    let y = parsed[1];
    if(x >= y && !this.isThisBooked){
      console.log('theres no room')
    }else{
      //update fileinfo
      this.isThisBooked = true;
      new Promise((resolve, reject) => {
        //first we get the favourites again to update the shown file info, then we make the changes to user favourites
        this.data.bookARide(this.rideInfo.file_id).subscribe( res => {
          resolve();
        });
      }).then(() => {
        //add a new favourite for the user in order to book this ride
        this.data.getBookedRidesByFile(this.rideInfo.file_id).subscribe( res => {
          this.amountBooked = res.length;
        });
      }).catch(e => {
        console.log('something went wrong with booking a ride process: ' + e);
      })

    }
  }

  deleteRide () {
   new Promise ((resolve, reject) => {
     this.data.deleteRide(this.rideInfo.file_id).subscribe( res => {
       console.log(res);
       resolve();
     })
   }).catch( e => {
     console.log('something went wrong with deleting a file: ' + e);
   }).then( () => {
     this.navParams.get('parentPage').getAllCarpMedia();
     this.navCtrl.pop();
   })
  }

  parseDesc (text){
    let textArr = text.trim().split('*');
    this.rideInfo.seats = textArr[0];
    this.rideInfo.date = textArr[1];
    this.rideInfo.parsedDesc = textArr[2];
  }




}
