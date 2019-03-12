import {Component, Input, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from "../../providers/media/media";
import {iCommentResponse, IMediaData, User} from "../../interfaces/interfaces";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {


  @ViewChild('commentInput') comment:Input;
    public form: FormGroup;
    profilePageInfo = {};
    comments = [];
    userProfilePic= null;
    apiUploadUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mediaProvider: MediaProvider,
    private formBuilder :FormBuilder,
    ) {
    this.form = this.formBuilder.group({
      file_id:[''],
      comment: [''],
    })
  }


    postAComment(){
    let commentValue = this.comment['_value'];
    if(commentValue.toString().length > 0){
     let data={
       file_id:this.userProfilePic.file_id,
       comment:commentValue.toString(),
     };
      this.mediaProvider.postAComment(data).subscribe( res => {
        console.log(res);
        this.form.reset();
        this.getComments();
      });
    }}


    getComments(){
      this.comments.length = 0;
      this.mediaProvider.getCommentsById(this.userProfilePic.file_id).subscribe((res: iCommentResponse[]) => {
        this.comments = res;
      })
    }

  ionViewDidLoad() {
    let user_id = this.navParams.get('user_id');

   this.mediaProvider.getViewProfilePic(user_id).then((res:IMediaData) =>{
     this.userProfilePic = res;
     console.log(this.userProfilePic);
   }).then(()=> {
     this.mediaProvider.getUserInfo(user_id).subscribe((res:User) => {
       this.profilePageInfo = res;
       this.getComments();
     })
   });
  }

}
