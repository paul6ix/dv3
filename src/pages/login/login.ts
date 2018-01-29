import {Component} from '@angular/core';
import {LoadingController, NavController, NavParams} from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider, public loadCrtl: LoadingController) {
    if (localStorage.getItem('loginToken')){
      this.navCtrl.setRoot(TabsPage);
    }
  }
  onLogin(){
    this.loader();
    console.log(this.username, this.password.hash);
    this.authProvider.postLogin(this.username,this.password).subscribe(data =>{
      console.log(data);
      localStorage.setItem('loginToken', JSON.stringify(data));
      this.navCtrl.setRoot(TabsPage);

    });

  }

  loader() {
    let loading = this.loadCrtl.create({
      content: 'Logging in',
      duration: 5000,
      dismissOnPageChange: true
    });
    loading.present();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
