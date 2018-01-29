import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {NewsProvider} from "../../providers/news/news";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news = [];


  constructor(public navCtrl: NavController, private newsProvider: NewsProvider) {
    this.newsProvider.getNews().subscribe(data => {

      localStorage.setItem('newsfeed', JSON.stringify(data));
      let localnews = JSON.parse(localStorage.getItem('newsfeed')).articles;
      this.news = localnews;
      console.log(this.news);


    })







  }

}
