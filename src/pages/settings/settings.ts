import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MediaProvider } from "../../providers/media/media";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { UserExists }  from "../../interface/media";

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
  @ViewChild('repeatPassword') repeatPassword: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formbuilder: FormBuilder,
    private mediaProvider: MediaProvider,
    private chooser: FileChooser,
    private alertCtrl: AlertController
    ) {
    this.form = this.formbuilder.group({
      file: null,
      username:[null, ],
      password:[null, ],
      email:[null,]
    })
  }

  updateFileSelectHandler(event){
  this.file = event.target.files[0];
  }

  validationCheck(){
    let validData;
    let data= {};

    Object.keys(this.form.value).forEach(entry => {
      if(this.form.value[entry]){
        data[entry]= this.form.value[entry];
      }
    });
    //check if there are some fields filled
    if(Object.keys(data).length > 0){
       {
      for(let entry of Object.keys(data)){
        switch (entry) {
          case 'username':
            this.mediaProvider.checkIfUserExist(data[entry]).subscribe((res:UserExists) => {
              if(!res.available){
                console.log('username not available, sorry kid.');
                this.presentAnAlert({title:'Error!', message:'the username was already taken..'})
              }
            });
            validData = false;
            break;

          case 'email':
            if(!this.emailValidator(data[entry])){
              console.log('email not valid');
              this.presentAnAlert({title:'Error', message:'email was not valid.'})
            }
            validData = false;
            break;

          case 'password':
            if(data[entry] !== this.repeatPassword['_value'] || data[entry].toString().length < 3){
              console.log('password is invalid');
              this.presentAnAlert({title:'Error', message:'password isnt valid'})
            }
            validData = false;
            break;

          default:
            break;
        }
        //validation check is succesful, upload the new data
        if(validData)this.upload(data)

      }}
    }
  }



  upload(data) {

    console.log(data);
    new Promise ((reject, resolve) => {
      this.mediaProvider.updateUserInfo(data).subscribe(res => {
      this.presentAnAlert({title:'Success!', message:'User data updated succesfully'})
      }, error => {
        console.log('something went wrong, bud ' + JSON.stringify(error));
        this.presentAnAlert({title:'Error', message:'something went wrong updating the data..'})
      })
    })
  }

  uploadProfilePic(){
    const fd= new FormData();
    fd.append('file', this.file);
    fd.append('title', 'profile_pic');
    fd.append('description',  'user_profile_pic');

    this.mediaProvider.uploadNewProfilePic(fd);
    this.navCtrl.pop();
  }

  emailValidator(email){
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

  presentAnAlert(alertData){
    let alert = this.alertCtrl.create({
      title: alertData.title,
      message: alertData.message,
      buttons: [
        {text: 'OK',
        }]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

}
