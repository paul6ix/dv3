import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import NewsAPI from "newsapi";

const newsapi = new NewsAPI('d3a6e97988bd43a1833061e16e5b9b5c');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: any;


  constructor(public navCtrl: NavController) {

    newsapi.v2.topHeadlines({
      sources: 'bbc-news'
    }).then(response => {
      console.log(response);
      this.news = response;


    });
  }

}
