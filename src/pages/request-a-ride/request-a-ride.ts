import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


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


  @ViewChild('destination') destination:Input;
  public form: FormGroup;

  show = false;
  placeholder = '..//assets/imgs/rideplaceholder.png';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider,
    private formbuilder: FormBuilder,
  ) {
    this.form = this.formbuilder.group({
      file:[this.placeholder],
      title:['', Validators.required],
      description:['', Validators.required],
    })
  }
  upload() {

    /*
    let formdata = new FormData();
    formdata.append('title', (this.departure + '-' + this.destination));
    formdata.append('description', this.description);
    formdata.append('file', this.placeholder);
    */
   //this.place = (this.departure + '-' + this.destination);
   // console.log(this.placeholder);
   // console.log(this.place);
    this.form.value.title +='-'+this.destination['_value'];

    console.log(this.form.value);
    this.mediaProvider.uploadRide(this.form.value).subscribe(resp => {
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
