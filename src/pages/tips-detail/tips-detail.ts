import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TipsDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tips-detail',
  templateUrl: 'tips-detail.html',
})
export class TipsDetailPage {

  post;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = this.navParams.get('post');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipsDetailPage');
  }

}
