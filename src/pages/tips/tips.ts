import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PostProvider} from "../../providers/post/post";


@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html',
})
export class TipsPage {
  posts;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postProvider: PostProvider) {
    this.postProvider.getPosts().subscribe(data => {
      console.log(data);
      this.posts = data;
  } );
  }
  onShowPost(post){
    this.navCtrl.push('TipsDetailPage', {post: post});
  }

}
