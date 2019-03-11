import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Chooser } from "@ionic-native/chooser";
import { MediaProvider } from "../../providers/media/media";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public form: FormGroup;
  private file: File;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    private chooser: Chooser,
    private mediaProvider: MediaProvider
    ) {
    this.form = this.formbuilder.group({
      file: Blob,
      username:['', ],
      password:['', ],
      email:['',]
    })
  }

  updateFileSelectHandler(event){
  this.file = event.target.files[0];
  }

  upload() {

    const fd= new FormData();
    fd.append('file', this.file);
    fd.append('username', this.form.value.username);
    fd.append('email',  this.form.value.email);
    fd.append('password', this.form.value.password);

    this.mediaProvider.uploadRide(fd);
    this.navCtrl.parent.select(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
