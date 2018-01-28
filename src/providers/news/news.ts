import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {routers} from "../../routes";

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {
  api_url = routers.news_url;

  constructor(public http: HttpClient) {
    console.log('Hello NewsProvider Provider');
  }

  getNews() {
    return this.http.get(this.api_url);
  }

}
