import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DateTimeData } from "ionic-angular/util/datetime-util";


@IonicPage()
@Component({
  selector: 'page-request-a-ride',
  templateUrl: 'request-a-ride.html',
})
export class RequestARidePage {




  @ViewChild('destination') destination:Input;
  @ViewChild('date') date:DateTimeData;
  @ViewChild('seats')seats:Input;
  public form: FormGroup;

  public show = false;

  private file: File;
  placeholder = '../assets/imgs/rideplaceholder.png';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider,
    private formbuilder: FormBuilder,

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

    let seats = this.seats['_value'];
    let title = this.form.value.title +='-'+this.destination['_value'];
    let desc = '/' + seats + '*' + this.date['_text'] + '*' + this.form.value.description;
    const fd= new FormData();
    fd.append('file', this.file);
    fd.append('title', title);
    fd.append('description',  desc);

    this.mediaProvider.uploadRide(fd);
    this.navCtrl.parent.select(0);
  }




  ionViewDidLoad () {

  }

}
