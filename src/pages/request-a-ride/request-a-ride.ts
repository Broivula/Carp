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

  public show = false;

  private pic: File;
  placeholder = "../../assets/imgs/rideplaceholder.png";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public mediaProvider: MediaProvider,
    private formbuilder: FormBuilder,

  ) {

    this.form = this.formbuilder.group({
      file:this.pic,
      title:['', Validators.required],
      description:['', Validators.required],
    })
  }

  getFilePath () {

  }

  fileEvent (evt){
    console.log(evt);
    this.pic = evt['_value'];
    console.log(this.pic);
    this.form.value.file = this.pic;
  }

  upload() {

    this.mediaProvider.getFileById().subscribe( res => {
      console.log(res);
    });
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


  ionViewDidLoad () {

  }

}
