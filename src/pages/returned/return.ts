import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { CameraOptions } from '@ionic-native/camera';
import { ReturnlistPage } from '../returnlist/returnlist';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClient } from '@angular/common/http';
import { ReturnItemRequest, GlobalVarible, Userlogin, ReturnListItemRequest } from '../../app/models';
import { GroupByPipe } from '../../group-by.pipe';
 




@IonicPage()
@Component({
  
  selector: 'page-return',
  templateUrl: 'return.html',
  providers : [GroupByPipe]
 
  
  
})
export class ReturnPage {
  [x: string]: any;
  ReturnItems: Array<ReturnItemRequest>;
  ReItems:any;
  GroupReturnItem:any;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private http: HttpClient,private groupByPipe: GroupByPipe) {
   
  }

  ionViewDidEnter(){
    this.http.get<ReturnItemRequest[]>(GlobalVarible.host + "/api/Item/GetItemreturn/" + Userlogin.loginname).subscribe(data => {
      this.ReturnItems = data;
      // this.ReItems = data.grou
      console.log(this.ReturnItems);
    });
  }
  // var borrowItems = data.map(item => {
  //   var borrowItem = new BorrowItem()
  //   borrowItem.id = item.id;
  //   borrowItem.name = item.name;
  //   borrowItem.amount = item.amount;
  //   borrowItem.totalamount = item.totalamount;
  //   borrowItem.slot = this.navParams.data.text;
  //   borrowItem.ischecked = false
  //   return borrowItem;
  // });
  // this.items = borrowItems;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnPage');
  }

  QRcode(){
    // this.barcodeScanner.scan().then(barcodeData => {
    //   if(barcodeData.text != undefined){
    //     this.navCtrl.push(ReturnlistPage,{text:barcodeData.text});
    //   }
    //  }).catch(err => {
    //      console.log('Error', err);
    //  });
     this.navCtrl.push(ReturnlistPage,{text:"A1"});
  }

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

  // returnlist() {
  //   this.navCtrl.push(ReturnlistPage)
  // }
}
