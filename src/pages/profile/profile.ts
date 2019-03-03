import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';
import {MediaProvider} from '../../providers/media/media';


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


  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout() {
    localStorage.clear();
    this.mediaProvider.logged = false;
    //   this.navCtrl.push(HomePage);
    this.navCtrl.parent.select(0);
  }

}
