import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider} from "../../providers/media/media";
import 'rxjs/add/operator/toPromise'
import { IMediaData } from "../../interfaces/interfaces";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  mediaArray : IMediaData[];
  apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(private media:MediaProvider) {
  }

  getAllCarpMedia () {
      this.media.getAllMedia().subscribe( res => {
        this.mediaArray = res;
      })
  }


  ionViewDidLoad() {
    this.getAllCarpMedia();
  }

}
