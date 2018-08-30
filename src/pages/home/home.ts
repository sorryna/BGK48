import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { ItemDetailPage } from '../item-detail/item-detail';
<<<<<<< HEAD
import { ReturnPage } from '../returned/return';
=======
import { ItemListPage } from '../item-list/item-list';
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
<<<<<<< HEAD
  public base64Image: any;
=======
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner) {

  }
<<<<<<< HEAD
=======

  goKeyListPage() {
    this.navCtrl.push(KeyListPage);
  }

  goItemlist(){
    this.navCtrl.push(ItemListPage);
  }
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00

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
<<<<<<< HEAD
  Showitem_detail() {
=======

  Showitem_detail(){
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
    this.navCtrl.push(ItemDetailPage);
  
  }

<<<<<<< HEAD
  Returned() {
    this.navCtrl.push(ReturnPage);
  }
=======
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
}
