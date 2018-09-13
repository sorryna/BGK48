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
import { BorrowPage } from '../pages/borrow/borrow';
import { BorrowSelectPage } from '../pages/borrow-select/borrow-select';
import { ReturnPage } from '../pages/returned/return';
import { ReturnlistPage } from '../pages/returnlist/returnlist';
import { WaitpersonPage } from '../pages/waitperson/waitperson';
import { ItemListPage } from '../pages/item-list/item-list';
import { LoginPage } from '../pages/login/login';
import { ConfirmPage } from '../pages/confirm/confirm';



import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AdditemPage } from '../pages/additem/additem';
import { EditPage } from '../pages/edit/edit';
import { GroupByPipe } from '../group-by.pipe';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    KeyListPage,
    ItemDetailPage,
    LendQrPage,
    BorrowPage,
    BorrowSelectPage,
    ReturnPage,
    ReturnlistPage,
    WaitpersonPage,
    ItemListPage,
    LoginPage,
    ConfirmPage,
    AdditemPage,
    EditPage,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    KeyListPage,
    ItemDetailPage,
    LendQrPage,
    BorrowPage,
    BorrowSelectPage,
    ReturnPage,
    ReturnlistPage,
    WaitpersonPage,
    ItemListPage,
    LoginPage,
    ConfirmPage,
    AdditemPage,
    EditPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner,  
    HttpClient,  
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

