import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
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
import {ForumPage} from "../pages/forum/forum";
import {AccountPage} from "../pages/account/account";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    TipsPage,
    LoginPage,
    ForumPage,
    AccountPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    TipsPage,
    LoginPage,
    ForumPage,
    AccountPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PostProvider
  ]
})
export class AppModule {
}
