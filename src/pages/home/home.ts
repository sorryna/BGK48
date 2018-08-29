import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { KeyListPage } from '../key-list/key-list';
import { ItemDetailPage } from '../item-detail/item-detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public base64Image:any;
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner) {

  }
  goKeyListPage() {
    this.navCtrl.push(KeyListPage);
  }
<<<<<<< HEAD

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
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
=======
  Showitem_detail(){
    this.navCtrl.push(ItemDetailPage);
  }

>>>>>>> 348f133e633971c5a47ff89dfe481cacf2c6b519
}

