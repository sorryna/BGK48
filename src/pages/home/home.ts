import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { KeyListPage } from '../key-list/key-list';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ItemListPage } from '../item-list/item-list';


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
<<<<<<< HEAD:src/pages/home/home.ts

  goItemlist(){
    this.navCtrl.push(ItemListPage);
  }
=======
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/src/pages/home/home.ts

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
    }, (err) => {
      // Handle error
    });
  }
<<<<<<< HEAD:src/pages/home/home.ts
}

=======

  Showitem_detail(){
    this.navCtrl.push(ItemDetailPage);
  }

}
>>>>>>> 26139098a76c3acf8a3702fc5f8ff6c84dcd7872:BGK48ionic/src/pages/home/home.ts
