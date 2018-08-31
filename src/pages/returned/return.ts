import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { CameraOptions } from '@ionic-native/camera';
import { ReturnlistPage } from '../returnlist/returnlist';
/**
 * Generated class for the ReturnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return',
  templateUrl: 'return.html',
})
export class ReturnPage {
  [x: string]: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
//  private barcodeScanner: BarcodeScanner
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnPage');
  }

  // QRcode(){
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //    }).catch(err => {
  //        console.log('Error', err);
  //    });
  // }

  // Camera(){
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
    
  //   this.camera.getPicture(options).then((imageData) => {
  //    // imageData is either a base64 encoded string or a file URI
  //    // If it's base64 (DATA_URL):
  //    let base64Image = 'data:image/jpeg;base64,' + imageData;
  //   }, (err) => {
  //    // Handle error
  //   });
  // }

  returnlist(){
    this.navCtrl.push(ReturnlistPage)
  }
}
