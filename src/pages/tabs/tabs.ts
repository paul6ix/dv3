import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {TipsPage} from "../tips/tips";
import {AccountPage} from "../account/account";
import {ChatPage} from "../chat/chat";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AccountPage;
  tab3Root = ChatPage;
  tab4Root = TipsPage;

  constructor() {

  }
}
