import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ReturnPage } from '../returned/return';
import { ItemListPage } from '../item-list/item-list';
import { LoginPage } from '../login/login';
import { KeyListPage } from '../key-list/key-list';
import { BorrowSelectPage } from '../borrow-select/borrow-select';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner) {

  }

  goKeyListPage() {
    this.navCtrl.push(KeyListPage);
  }

  goItemlist(){
    this.navCtrl.push(ItemListPage);
  }
  
  QRScan() {
    this.navCtrl.push(BorrowSelectPage)
    // this.barcodeScanner.scan().then(barcodeData => {
    //   console.log('Barcode data', barcodeData);
    // }).catch(err => {
    //   console.log('Error', err);
    // });
  }
  
  goLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  Returned() {
    this.navCtrl.push(ReturnPage);
  }
}
