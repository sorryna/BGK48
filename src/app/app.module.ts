import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { KeyListPage } from '../pages/key-list/key-list';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { LendQrPage } from '../pages/lend-qr/lend-qr';
import { ItemListPage } from '../pages/item-list/item-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KeyListPage,
    ItemDetailPage,
    LendQrPage,
    ItemListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KeyListPage,
    ItemDetailPage,
    LendQrPage,
    ItemListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
