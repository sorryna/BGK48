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
<<<<<<< HEAD
=======

  goItemlist(){
    this.navCtrl.push(ItemListPage);
  }
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
>>>>>>> 49877ec73e388d87dbc10990d01dede6fda82c23

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
<<<<<<< HEAD
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
    //  let base64Image = 'data:image/jpeg;base64,' + imageData;
=======
>>>>>>> 49877ec73e388d87dbc10990d01dede6fda82c23
    }, (err) => {
      // Handle error
    });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Showitem_detail() {
=======

>>>>>>> 49877ec73e388d87dbc10990d01dede6fda82c23
  Showitem_detail(){
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
    this.navCtrl.push(ItemDetailPage);
  
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  Returned() {
    this.navCtrl.push(ReturnPage);
  }
=======
>>>>>>> 60c177f7c9e9cc0106a3fefa92b9ce7e95784e00
>>>>>>> 49877ec73e388d87dbc10990d01dede6fda82c23
}
