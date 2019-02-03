import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider} from "../../providers/media/media";
import 'rxjs/add/operator/toPromise'
import { IMediaData } from "../../interfaces/interfaces";
import { Observable } from "rxjs";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  listOfAllMedia : Observable<IMediaData[]>;
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(public navCtrl: NavController, public navParams: NavParams, private mediaProvider:MediaProvider) {
  }

  getAllCarpMedia () {
      this.mediaProvider.getAllCarpMedia().subscribe( res => {
      console.log(res);
      this.listOfAllMedia = res;
    });
  }

  ionViewDidLoad() {
    this.getAllCarpMedia();
  }

}
