import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TipsPage} from "../pages/tips/tips";
import {AuthProvider} from '../providers/auth/auth';
import {PostProvider} from '../providers/post/post';
import {HttpClientModule} from "@angular/common/http";
import {LoginPage} from "../pages/login/login";
import {AccountPage} from "../pages/account/account";
import {NewsProvider} from '../providers/news/news';
import {ForumProvider} from '../providers/forum/forum';
import {ChatRoomPage} from "../pages/chat-room/chat-room";
import {SocketIoConfig, SocketIoModule} from "ng-socket-io";
import {OneSignal} from "@ionic-native/onesignal";
import {ChatPage} from "../pages/chat/chat";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

const config: SocketIoConfig = {url: 'http://localhost:3000', options: {}};
const config2 = {
  apiKey: "AIzaSyCXuNZRoIpLAyEpxNJaxdpAnvABgKyuYOg",
  authDomain: "donbaytips.firebaseapp.com",
  databaseURL: "https://donbaytips.firebaseio.com",
  projectId: "donbaytips",
  storageBucket: "donbaytips.appspot.com",
  messagingSenderId: "274948898930"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TipsPage,
    LoginPage,
    AccountPage,
    ChatRoomPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(config2),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TipsPage,
    LoginPage,
    AccountPage,
    ChatRoomPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PostProvider,
    NewsProvider,
    ForumProvider,
    OneSignal
  ]
})
export class AppModule {
}
