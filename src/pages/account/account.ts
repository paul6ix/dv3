import {Component} from '@angular/core';
import {App, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  name;
  email;
  type;


  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    let localname = JSON.parse(localStorage.getItem('loginToken')).user_nicename;
    let localemail = JSON.parse(localStorage.getItem('loginToken')).user_email;
    this.name = localname.toUpperCase();
    this.email = localemail;
    if (this.name === "PAUL6IX") {
      this.type = "Administrator";
    }
    else {
      this.type = "Member";
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  onLogout() {
    // this.navCtrl.setRoot(LoginPage);
    let nav = this.app.getRootNav();
    nav.setRoot(LoginPage);


    localStorage.clear();
  }

}
