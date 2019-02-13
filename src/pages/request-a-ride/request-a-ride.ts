import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import { File} from "@ionic/app-scripts";
import { link } from "fs";


/**
 * Generated class for the RequestARidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-a-ride',
  templateUrl: 'request-a-ride.html',
})
export class RequestARidePage {
  @ViewChild('formdata') formdata;

  departure = '';
  destination = '';
  description = '';
  title = '';
  user = {
    'username': 'xdlsd',
    'password': 'xdlsd'
  };
  place = '';
  show = false;
  file = cordova.file.dataDirectory + rideplaceholder.png;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public mediaProvider: MediaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestARidePage');
  }

  upload() {
    const formdata = new FormData();
    formdata.append('title', (this.departure + '-' + this.destination));
    formdata.append('description', this.description);
    formdata.append('file', this.file);
    this.place = (this.departure + '-' + this.destination);
    console.log(this.file);
    console.log(this.place);
    console.log(this.formdata);
    this.mediaProvider.uploadRide(formdata).subscribe(resp => {
      console.log(resp)
    });
  }

  login() {
    this.mediaProvider.login(this.user).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user_id', response.user.user_id.toString());
      });
  }
}
