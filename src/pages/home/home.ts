import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider} from "../../providers/media/media";
import 'rxjs/add/operator/toPromise'
import {IMediaData, ITagMediaData} from "../../interfaces/interfaces";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RidePage} from "../ride/ride";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  mediaArray : ITagMediaData[];
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    private media:MediaProvider,
    private navCtrl: NavController
    ) {
  }

  fetchAllCarpMedia () {
    if(this.mediaArray) this.mediaArray.length = 0;

      this.media.getAllCarpMedia().subscribe( res => {
        console.log(res);
        this.mediaArray = res;
      })
  }

  changeToRidePage(params?){
    params.parentPage = this;
    this.navCtrl.push(RidePage, params);
  }

  getAllCarpMedia (){
    return this.mediaArray;
  }



  ionViewDidLoad() {
    this.fetchAllCarpMedia();
    this.media.markLogged();
  }

}
