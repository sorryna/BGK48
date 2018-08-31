import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ReturnPage } from '../returned/return';
import { ItemListPage } from '../item-list/item-list';
import { LoginPage } from '../login/login';
import { KeyListPage } from '../key-list/key-list';
import { BorrowSelectPage } from '../borrow-select/borrow-select';
import { ConfirmPage } from '../confirm/confirm';
import { ItemDetailPage } from '../item-detail/item-detail';

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



    goItemlist(data) {


      this.navCtrl.push(ItemListPage, { numberlocker: data });
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


    Camera() {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.FILE_URI,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      }

      this.camera.getPicture(options).then((imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        //  let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        // Handle error
      });
    }



    Showitem_detail() {
      this.navCtrl.push(ItemDetailPage);

    }


    goLoginPage() {

      this.navCtrl.push(LoginPage);
    }

    Returned() {
      this.navCtrl.push(ReturnPage);
    }




  }
