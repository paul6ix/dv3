import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import * as NewsAPI from "newsapi";
import {NewsProvider} from "../../providers/news/news";

const newsapi = new NewsAPI('d3a6e97988bd43a1833061e16e5b9b5c');

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
