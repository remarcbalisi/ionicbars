import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
import { Crop } from '@ionic-native/crop';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewSpecialsPage } from '../pages/new-specials/new-specials';
import { SpecialsListsPage } from '../pages/specials-lists/specials-lists';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewSpecialsPage,
    SpecialsListsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewSpecialsPage,
    SpecialsListsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagePicker,
    Camera,
    Crop,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
