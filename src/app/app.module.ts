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
<<<<<<< HEAD
import { ReturnPage } from '../pages/returned/return';
import { ReturnlistPage } from '../pages/returnlist/returnlist';
import { WaitpersonPage } from '../pages/waitperson/waitperson';
=======
import { ItemListPage } from '../pages/item-list/item-list';
import { LoginPage } from '../pages/login/login';
import { ConfirmPage } from '../pages/confirm/confirm';
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KeyListPage,
    ItemDetailPage,
    LendQrPage,
<<<<<<< HEAD
    ReturnPage,
    ReturnlistPage,
    WaitpersonPage
=======
    ItemListPage,
    LoginPage,
    ConfirmPage
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
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
<<<<<<< HEAD
    ReturnPage,
    ReturnlistPage,
    WaitpersonPage
=======
    ItemListPage,
    LoginPage,
    ConfirmPage
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
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
