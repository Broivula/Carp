import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Chooser } from "@ionic-native/chooser";

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

  private file: File;
  chosen = false;
  fileBlob = new Blob;
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

  upload() {

    // this.mediaProvider.getFileById().subscribe( res => {
    //   console.log(res);
    // });

    this.form.value.title +='-'+this.destination['_value'];
    this.form.value.file = this.fileBlob;
    console.log(this.form.value.file);
    console.log(this.form.value);
    this.mediaProvider.uploadRide(this.form.value).subscribe(resp => {
      console.log(resp)
    });
  }

  choosePic() {
    this.chooser.getFile('image/*')
      .then(file => {
        console.log(file ? file.name : 'canceled');
        this.fileBlob = new Blob([file.data], { type: file.mediaType });
        console.log(this.fileBlob);
        this.chosen = true;
      })
      .catch((error: any) => console.error(error));
  }


  ionViewDidLoad () {

  }

}
