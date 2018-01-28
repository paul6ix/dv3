import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {routers} from "../../routes";

/*
  Generated class for the ForumProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ForumProvider {
  api_url = routers.site_url + routers.forum_url;

  constructor(public http: HttpClient) {
    console.log('Hello ForumProvider Provider');
  }

  getForum() {
    return this.http.get(this.api_url);
  }

  postForum(title, content) {
    let localname = JSON.parse(localStorage.getItem('loginToken')).user_nicename;
    let data = {
      title: title,
      content: content,
      creator: localname,
      status: 'publish'
    };
    let token = JSON.parse(localStorage.getItem('loginToken')).token;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.api_url, data, {headers});

  }
}
