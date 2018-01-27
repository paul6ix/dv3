import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {routers} from "../../routes";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {
  api_url = routers.site_url+routers.post_url;

  constructor(public http: HttpClient) {
    console.log('Hello PostProvider Provider');
  }
  getPosts(){
    return this.http.get(this.api_url);

  }

}
