import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HelloPage} from '../pages/hello/hello';
import { MasterPage } from "../pages/master/master";
import { LoginPage } from "../pages/login/login";
import { CheckPage } from "../pages/check/check";
import {AsuntestPage} from '../pages/asuntest/asuntest';
import { TabIconContentPage,TabIconContentPage1,IconPage } from "../pages/tabs/icon/pages";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HelloPage,
    MasterPage,
    LoginPage,
    CheckPage,
    AsuntestPage,TabIconContentPage,TabIconContentPage1,
    IconPage
  ],
  imports: [
    BrowserModule,FormsModule,
    IonicModule.forRoot(MyApp),
    // IonicModule.forRoot(MyApp,{},{
    //   links: [
    //   { component:HomePage,name:'Home',segment:'home123'},
    //   { component:MasterPage,name:'Master',segment:'master/:name/:age'}
    //   ]
    // }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HelloPage,
    MasterPage,
    LoginPage,
    CheckPage,
    AsuntestPage,TabIconContentPage,TabIconContentPage1,
    IconPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
