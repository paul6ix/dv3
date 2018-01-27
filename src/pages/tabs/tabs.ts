import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {TipsPage} from "../tips/tips";
import {ForumPage} from "../forum/forum";
import {AccountPage} from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccountPage;
  tab3Root = ForumPage;
  tab4Root = TipsPage;

  constructor() {

  }
}
