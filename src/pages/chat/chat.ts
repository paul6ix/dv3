import {Component, ViewChild} from '@angular/core';
import {Content, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',

})
export class ChatPage {
  @ViewChild(Content) content: Content;

  username: string = '';
  message: string = '';
  messages: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    let localname = JSON.parse(localStorage.getItem('loginToken')).user_nicename;
    this.username = localname.toUpperCase();
    this.messages = db.list('/chat').valueChanges();

  }

  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    });
    this.message = "";
  }

  ionViewDidLoad() {
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has joined the room`
    });
    console.log('ionViewDidLoad ChatPage');

  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ChatRoomPage');
    this.db.list('/chat').push({
      specialMessage: true,
      message: `${this.username} has left the room`
    });
  }

  ionViewDidEnter() {
    setTimeout(time => {
      this.content.scrollToBottom();

    });


  }


}


