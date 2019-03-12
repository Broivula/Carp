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
import { StatusBar } from "@ionic-native/status-bar";
import { RidePage } from "../pages/ride/ride";
import { SettingsPage } from "../pages/settings/settings";
import { FileChooser } from "@ionic-native/file-chooser/ngx";
import { ViewProfilePage } from "../pages/view-profile/view-profile";
import { PipesModule } from "../pipes/pipes.module";

@NgModule({
  declarations: [
    MyApp,
    RidePage,
    SettingsPage,
    ViewProfilePage
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
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    RidePage,
    SettingsPage,
    ViewProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MediaProvider,
    FileChooser
  ]
})
export class AppModule {}
