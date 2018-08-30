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
<<<<<<< HEAD:src/app/app.module.ts
import { ItemListPage } from '../pages/item-list/item-list';
=======
import { LoginPage } from '../pages/login/login';
import { ConfirmPage } from '../pages/confirm/confirm';
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/src/app/app.module.ts

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KeyListPage,
    ItemDetailPage,
    LendQrPage,
<<<<<<< HEAD:src/app/app.module.ts
    ItemListPage
=======
    LoginPage,
    ConfirmPage
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/src/app/app.module.ts
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
<<<<<<< HEAD:src/app/app.module.ts
    ItemListPage
=======
    LoginPage,
    ConfirmPage
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/src/app/app.module.ts
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
