import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule,} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule} from "@angular/common/http";

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { TabsPageModule} from "../pages/tabs/tabs.module";
import { LoginRegisterPageModule} from "../pages/login-register/login-register.module";
import { ProfilePageModule} from "../pages/profile/profile.module";
import { TabsPage} from "../pages/tabs/tabs";
import { RequestARidePageModule } from "../pages/request-a-ride/request-a-ride.module";
import { MediaProvider } from '../providers/media/media';
import { Chooser } from "@ionic-native/chooser/";
import {StatusBar} from "@ionic-native/status-bar";
import { File } from "@ionic-native/file/ngx";
import { FileTransfer } from "@ionic-native/file-transfer/ngx";
import { RidePage } from "../pages/ride/ride";
import { SettingsPage } from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    RidePage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    TabsPageModule,
    LoginRegisterPageModule,
    ProfilePageModule,
    RequestARidePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RidePage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider,
    File,
    Chooser,
  ]
})
export class AppModule {}
