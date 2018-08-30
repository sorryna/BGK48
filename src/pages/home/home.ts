import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { ItemDetailPage } from '../item-detail/item-detail';
import { ReturnPage } from '../returned/return';
import { ItemListPage } from '../item-list/item-list';
import { KeyListPage } from '../key-list/key-list';


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
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
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


  Returned() {
    this.navCtrl.push(ReturnPage);
  }

 
}
