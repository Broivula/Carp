import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Chooser } from "@ionic-native/chooser";
import {DateTimeData} from "ionic-angular/util/datetime-util";

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
  @ViewChild('date') date:DateTimeData;
  public form: FormGroup;

  public show = false;

  private file: File;
  placeholder = '../assets/imgs/rideplaceholder.png';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider,
    private formbuilder: FormBuilder,
    public chooser: Chooser

  ) {

    this.form = this.formbuilder.group({
      file: Blob,
      title:['', Validators.required],
      description:['', Validators.required],
    })
  }

  fileSelectHandler(evt){
    console.log(evt);
    this.file = evt.target.files[0];
  }

  upload() {

    let title = this.form.value.title +='-'+this.destination['_value'];
    const fd= new FormData();
    fd.append('file', this.file);
    fd.append('title', title);
    fd.append('description',  this.date['_text']);

    this.mediaProvider.uploadRide(fd);
  }




  ionViewDidLoad () {

  }

}
