import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ForumProvider} from "../../providers/forum/forum";


/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  forums;

  constructor(public navCtrl: NavController, public navParams: NavParams, private forumProvider: ForumProvider) {
    this.forumProvider.getForum().subscribe(data => {
      console.log(data);
      this.forums = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  onshowforum(forum) {
    this.navCtrl.push('ForumDetailPage', {forum});
  }

  onCreateForum() {
    this.navCtrl.push('CreateForumPage')
  }

  onRefresh(refresher) {
    this.forumProvider.getForum().subscribe(data => {
      console.log(data, refresher);
      this.forums = data;

    });

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }



}
