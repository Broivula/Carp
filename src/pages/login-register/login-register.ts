
import { IonicPage} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from '@angular/forms';
import {Login, User, UserCreated, UserExists} from '../../interface/media';
import {MediaProvider} from '../../providers/media/media';


@IonicPage()
@Component({
  selector: 'page-login-register',
  templateUrl: 'login-register.html',
})
export class LoginRegisterPage {

  @ViewChild('lf') loginForm: NgForm;
  @ViewChild('rf') registerForm: NgForm;

  showRegister = false;
  user: User = { username: '' };
  confirmPassword = '';
  userAlert = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public mediaProvider: MediaProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginRegisterPage');
  }

  swapLoginRegisterForms(): void {
    this.showRegister = !this.showRegister;
  }

  showAlert(message: string): void {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: message,
      buttons: ['OK'],
    });
    alert.present().catch();
  }

  login(automatic = false): void {
    console.log('logging in:', this.user.username);
    this.mediaProvider.login(this.user).subscribe((response: Login) => {
    //  console.log(response);
      localStorage.setItem('token', response.token);
      this.mediaProvider.token = response.token;
      this.mediaProvider.user = response.user;
      localStorage.setItem('user_id', response.user.user_id.toString());
      this.mediaProvider.getUserRelevantData();
      this.mediaProvider.logged = true;
      // Reset form only if it exists
      if (!automatic) this.loginForm.reset();
      this.navCtrl.parent.select(0);
    }, error => {
      console.log(error);
      this.showAlert(error.statusText);
    });
  }

  checkPasswordMatch(): void {
    if (this.user.password !== this.confirmPassword) {
      this.registerForm.form.controls['confirmPassword'].setErrors({ 'incorrect': true });
      this.registerForm.form.controls['confirmPassword'].markAsTouched();
    }
  }

  register() {
    this.mediaProvider.register(this.user).subscribe((response: UserCreated) => {
      console.log(response);
      this.mediaProvider.logged = true;
      this.login(true);
      this.registerForm.reset();
    }, error => {
      console.log(error);
      this.showAlert(error.error.message);
    });
  }

  checkUserExists(): void {
    this.mediaProvider.checkIfUserExist(this.user.username).
      subscribe((response: UserExists) => {
        console.log('username free:', response.available);
        if (!response.available) {
          this.registerForm.form.controls['username'].setErrors({ 'incorrect': true });
          this.registerForm.form.controls['username'].markAsTouched();
          this.userAlert = true;
        } else {
          console.log('Username already in use');
          this.userAlert = false;
        }
      });
  }

}
