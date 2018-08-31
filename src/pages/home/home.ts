import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ReturnPage } from '../returned/return';
import { ItemListPage } from '../item-list/item-list';
import { LoginPage } from '../login/login';
import { KeyListPage } from '../key-list/key-list';
import { BorrowSelectPage } from '../borrow-select/borrow-select';
import { ConfirmPage } from '../confirm/confirm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  selectedItem: any;
  // items: Item[];
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BorrowSelectPage, {
      item: item
    });
  }

  goKeyListPage() {
    this.navCtrl.push(KeyListPage);
  }

  goItemlist() {
    this.navCtrl.push(ItemListPage);
  }

  QRScan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.navCtrl.push(BorrowSelectPage)
      if (barcodeData.text != undefined) this.navCtrl.push(ConfirmPage, barcodeData.text);
    }).catch(err => {
      console.log('Error', err);
    });
  }

  goLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  Returned() {
    this.navCtrl.push(ReturnPage);
  }

}
