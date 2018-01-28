import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ForumDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum-detail',
  templateUrl: 'forum-detail.html',
})
export class ForumDetailPage {
  forum;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.forum = this.navParams.get('forum');
    console.log(this.forum);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumDetailPage');
  }

}
