import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Socket} from 'ng-socket-io';
import {Observable} from "rxjs/Observable";

@IonicPage()
@Component({
  selector: 'page-chat-room',
  templateUrl: 'chat-room.html',
})
export class ChatRoomPage {
  nickname;
  messages = [];
  message = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private socket: Socket, private toastCrtl: ToastController) {
    let localname = JSON.parse(localStorage.getItem('loginToken')).user_nicename;
    this.nickname = localname.toUpperCase();
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.getMessages().subscribe(message => {
      this.messages.push(message);
    });

    this.getUsers().subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      }
      else {
        this.showToast('User Joined: ' + user)
      }
    });
  }

  sendMessage() {
    this.socket.emit('add-message', {text: this.message});
    this.message = '';

  }

  getUsers() {
    let observable = new Observable(observer => {
      this.socket.on('users-changed', data => {
        observer.next(data);

      })
    });
    return observable
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message', data => {
        observer.next(data);

      })
    });
    return observable
  }

  showToast(msg) {
    let toast = this.toastCrtl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatRoomPage');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave ChatRoomPage');
    this.socket.disconnect()
  }

}
