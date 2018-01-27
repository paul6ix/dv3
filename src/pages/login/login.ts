import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from "../../providers/auth/auth";
import {TabsPage} from "../tabs/tabs";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider : AuthProvider) {
    if (localStorage.getItem('loginToken')){
      this.navCtrl.setRoot(TabsPage);
    }
  }
  onLogin(){
    console.log(this.username, this.password.hash);
    this.authProvider.postLogin(this.username,this.password).subscribe(data =>{
      console.log(data);
      localStorage.setItem('loginToken', JSON.stringify(data))
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}