import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { ReturnPage } from '../returned/return';
import { ItemListPage } from '../item-list/item-list';
import { LoginPage } from '../login/login';
import { KeyListPage } from '../key-list/key-list';
import { BorrowSelectPage } from '../borrow-select/borrow-select';
import { ItemDetailPage } from '../item-detail/item-detail';
import { Userlogin, BorrowingId, GlobalVarible, BorrowingItem } from '../../app/models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  selectedItem: any;
  showQRtext: string;
 

  // items: Item[];
  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private http: HttpClient) 
    {
      this.selectedItem = navParams.get('item');

      // console.log(navParams.data.Username);
      console.log("logingname>>" + Userlogin.loginname);
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
    this.navCtrl.push(ItemListPage, { numberlocker: data, Username: this.navParams.data.Username });
  }



  QRScan() {
    // BorrowingId.borrowingId
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData.text);
      this.showQRtext = barcodeData.text;
      // this.navCtrl.push(BorrowSelectPage)
      // barcodeData.text != undefined
      var strQr = barcodeData.text;
      var stwTextQr = null;

      var subStr = strQr.substring(6);



      if (stwTextQr = strQr.startsWith("Borrow") == true) {
        // this.http.get<BorrowingItem>(GlobalVarible.host + "/api/Item/GetBorrowitemList/" + subStr).subscribe((data) => {
        //   this.updatewitness = data;
        //   console.log(this.updatewitness)
        // });
        let alert = this.alertCtrl.create({
          title: 'พยานยืนยันการยืม',
          message: 'คุณแน่ใจนะว่าต้องการเป็นพยานการยืมของ',
          buttons: [
            {
              text: 'ยกเลิก',
              role: 'cancel',
              handler: () => {

              }
            },
            {
              text: 'ยืนยัน',
              handler: () => {
               let data = {
                 'id':subStr,
                 'witness':Userlogin.loginname
               }
                this.http.post(GlobalVarible.host + "/api/Item/updateWitness",data)
                .subscribe(data => {
                  this.navCtrl.pop();
                });



              }
            }
          ]
        });
        alert.present();

        // this.navCtrl.push(ConfirmPage, { BorrowingIdRe: subStr });
      }
      else if (stwTextQr = strQr.startsWith("Return") == true) {

      }
      else {
        this.navCtrl.push(BorrowSelectPage, { text: barcodeData.text });
      }
    }).catch(err => {
      console.log('Error', err);
    });
    // this.navCtrl.push(BorrowSelectPage,{text :"A1"});
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
