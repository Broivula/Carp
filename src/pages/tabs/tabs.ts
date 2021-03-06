import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Tabs} from 'ionic-angular';
import { HomePage} from "../home/home";
import { LoginRegisterPage} from "../login-register/login-register";
import { ProfilePage} from "../profile/profile";
import { MediaProvider } from "../../providers/media/media";
import { RequestARidePage} from "../request-a-ride/request-a-ride";

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  loginRegisterRoot = LoginRegisterPage;
  homeRoot = HomePage;
  requestARideRoot = RequestARidePage;
  profileRoot = ProfilePage;


  constructor(public navCtrl: NavController, public media: MediaProvider) {}


}
