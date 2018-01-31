import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ForumProvider} from "../../providers/forum/forum";

/**
 * Generated class for the CreateForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-forum',
  templateUrl: 'create-forum.html',
})
export class CreateForumPage {
  title;
  content;

  constructor(public navCtrl: NavController, public navParams: NavParams, private forumProvider: ForumProvider, public alertCrtl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateForumPage');
  }

  onPublishForum() {
    this.forumProvider.postForum(this.title, this.content).subscribe(data => {
      console.log(data);
    });
    this.showAlert();
    this.navCtrl.popTo('ForumPage');

  }

  showAlert() {
    let alert = this.alertCrtl.create({
      title: 'New Forum!',
      subTitle: 'Forum Created successfully!',
      buttons: ['OK']
    });
    alert.present();
  }


}
