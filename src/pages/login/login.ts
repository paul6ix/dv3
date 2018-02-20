import {Component} from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, public loadCrtl: LoadingController, public alertCrtl: AlertController) {
    if (localStorage.getItem('loginToken')){
      this.navCtrl.setRoot(TabsPage);
    }
  }
  onLogin(){
    this.loader();
    // console.log(this.username, this.password);
    this.authProvider.postLogin(this.username,this.password).subscribe(data =>{
      console.log(data);
      localStorage.setItem('loginToken', JSON.stringify(data));
      this.navCtrl.setRoot(TabsPage);

    }, err => {
      let dataerr = err.error.message;
      let alert = this.alertCrtl.create({
        title: 'ERROR!',
        subTitle: dataerr,
        buttons: ['OK']
      });
      alert.present();


    });

  }

  loader() {
    let loading = this.loadCrtl.create({
      content: 'Logging in',
      duration: 8000,
      dismissOnPageChange: true,

    });
    loading.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
