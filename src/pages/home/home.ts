import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider} from "../../providers/media/media";
import { ITagMediaData } from "../../interfaces/interfaces";
import { RidePage } from "../ride/ride";

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
    private navCtrl: NavController,
    private alertCtrl: AlertController
    ) {
  }

  fetchAllCarpMedia () {
    if(this.mediaArray) this.mediaArray.length = 0;

      this.media.getAllCarpMedia().subscribe( res => {
        console.log(res);
        res.map(entry => this.parseDesc(entry.description, entry));
        this.mediaArray = res;
      })
  }

  changeToRidePage(params?){

    if(!localStorage.getItem('token')){
      let alert = this.alertCtrl.create({
        title: 'Create a free account!',
        message: 'Login or create an account to see the available rides',
        buttons: [
          {text: 'Signup/Login',
          }]
      });
      alert.present();
      alert.onDidDismiss(() =>{this.navCtrl.parent.select(3);});
    }else{
      params.parentPage = this;
      this.navCtrl.push(RidePage, params);
    }
  }

  getAllCarpMedia (){
    return this.mediaArray;
  }

  parseDesc (text, parent){
    let textArr = text.trim().split('*');
    parent.seats = textArr[0];
    parent.date = textArr[1];
    parent.parsedDesc = textArr[2];
  }

  ionViewDidLoad() {

    this.fetchAllCarpMedia();
    this.media.markLogged();
    if(localStorage.getItem('token')){
      this.media.getUserRelevantData();
    }


  }

}
